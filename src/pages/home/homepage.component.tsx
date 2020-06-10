import React, { useEffect } from "react";
import { connect } from "react-redux";
import Tabs from "../../components/tabs/tabs.component";
import Slider from "../../components/slider/slider.component";
import { slides } from "../../data/dump-data";
import MoviesList from "../../components/movies-list/movies-list.component";
import {
  selectNewMovies,
  selectPopularMovies,
  selectUpcomingMovies,
} from "../../redux/movies/movies.selectors";
import { createStructuredSelector } from "reselect";
import { IHomePageProps, IHomePageMapDispatchProps } from "./types";
import { IRootState } from "../../redux/types";
import { MovieActionTypes } from "redux/movies/movies.types";
import { fetchMoviesStart } from "redux/movies/movies.actions";
import { Dispatch } from "redux";

const HomePage = ({
  newMovies,
  popularMovies,
  upcomingMovies,
  fetchMoviesStart,
}: IHomePageProps & IHomePageMapDispatchProps) => {
  useEffect(() => {
    fetchMoviesStart();
  }, []);

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

  return (
    <main className="homepage">
      <Slider interval={3000} slides={slides} />
      <Tabs tabs={tabsData} />
    </main>
  );
};

const mapStateToProps = createStructuredSelector<IRootState, IHomePageProps>({
  newMovies: selectNewMovies,
  popularMovies: selectPopularMovies,
  upcomingMovies: selectUpcomingMovies,
});

const mapDispatchToProps = (dispatch: Dispatch<MovieActionTypes>) => ({
  fetchMoviesStart: () => dispatch(fetchMoviesStart()),
});

export default connect(mapStateToProps, mapDispatchToProps)(HomePage);
