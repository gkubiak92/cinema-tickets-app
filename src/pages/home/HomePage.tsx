import React from "react";
import "./styles.scss";
import { connect } from "react-redux";
import Tabs from "components/Tabs/Tabs";
import Slider from "components/Slider/Slider";
import { slides } from "data/dump-data";
import MoviesList from "components/MoviesList/MoviesList";
import {
  selectNewMovies,
  selectPopularMovies,
  selectUpcomingMovies,
  selectIsFetchingMovies,
} from "redux/movies/selectors";
import { createStructuredSelector } from "reselect";
import { IHomePageProps } from "./types";
import { IRootState } from "redux/types";
import LoaderSpinner from "components/LoaderSpinner/LoaderSpinner";
const HomePage = ({
  newMovies,
  popularMovies,
  upcomingMovies,
  isFetchingMovies,
}: IHomePageProps) => {
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
      {isFetchingMovies ? <LoaderSpinner /> : <Tabs tabs={tabsData} />}
    </main>
  );
};

const mapStateToProps = createStructuredSelector<IRootState, IHomePageProps>({
  newMovies: selectNewMovies,
  popularMovies: selectPopularMovies,
  upcomingMovies: selectUpcomingMovies,
  isFetchingMovies: selectIsFetchingMovies,
});

export default connect(mapStateToProps)(HomePage);