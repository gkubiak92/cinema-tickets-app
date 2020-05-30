import React from "react";
import { connect } from 'react-redux'
import Tabs from "../../components/tabs/tabs.component";
import Slider from "../../components/slider/slider.component";
import { slides } from "../../data/dump-data";
import MoviesList from "../../components/movies-list/movies-list.component";
import { selectNewMovies, selectPopularMovies, selectUpcomingMovies } from "../../redux/movies/movies.selectors";
import { createStructuredSelector } from 'reselect'
import { IHomePageState } from "./types";

const HomePage = ({ newMovies, popularMovies, upcomingMovies }: IHomePageState) => {
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

const mapStateToProps = createStructuredSelector<any, any>({
  newMovies: selectNewMovies,
  popularMovies: selectPopularMovies,
  upcomingMovies: selectUpcomingMovies
});

export default connect(mapStateToProps)(HomePage);
