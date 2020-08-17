import React, { useEffect } from "react";
import "./styles.scss";
import { connect } from "react-redux";
import Slider from "components/Slider/Slider";
import { slides } from "./slides";
import MoviesList from "components/MoviesList/MoviesList";
import Tabs from "components/Tabs/Tabs";
import {
  selectNewMovies,
  selectPopularMovies,
  selectUpcomingMovies,
  selectIsFetchingMovies,
} from "redux/movies/selectors";
import { createStructuredSelector } from "reselect";
import { IHomePageProps, IMappedActions } from "./types";
import { IRootState } from "redux/types";
import { fetchMoviesStart } from "redux/movies/actions";
import withSpinner from "components/HOC/withSpinner/withSpinner";

const HomePage = ({
  newMovies,
  popularMovies,
  upcomingMovies,
  isFetchingMovies,
  fetchMoviesStart
}: IHomePageProps & IMappedActions) => {
  useEffect(() => {
    fetchMoviesStart();
  }, [fetchMoviesStart]);

  const tabsData = [
    {
      name: "new",
      content: <MoviesList movies={newMovies} />,
    },
    {
      name: "popular",
      content: <MoviesList movies={popularMovies} />,
    },
    {
      name: "upcoming",
      content: <MoviesList movies={upcomingMovies} />,
    },
  ];

  const TabsWithSpinner = withSpinner(Tabs, isFetchingMovies);

  return (
    <main className="homepage">
      <Slider interval={3000} slides={slides} />
      <TabsWithSpinner tabs={tabsData} />
    </main>
  );
};

const mapStateToProps = createStructuredSelector<IRootState, IHomePageProps>({
  newMovies: selectNewMovies,
  popularMovies: selectPopularMovies,
  upcomingMovies: selectUpcomingMovies,
  isFetchingMovies: selectIsFetchingMovies,
});

const mapDispatchToProps = {
  fetchMoviesStart
}

export default connect(mapStateToProps, mapDispatchToProps)(HomePage);
