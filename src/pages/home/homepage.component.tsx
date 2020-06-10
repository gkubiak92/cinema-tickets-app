import React from "react";
import { connect } from "react-redux";
import Tabs from "../../components/tabs/tabs.component";
import Slider from "../../components/slider/slider.component";
import { slides, movies } from "../../data/dump-data";
import MoviesList from "../../components/movies-list/movies-list.component";
import {
  selectNewMovies,
  selectPopularMovies,
  selectUpcomingMovies,
} from "../../redux/movies/movies.selectors";
import { createStructuredSelector } from "reselect";
import { IHomePageProps } from "./types";
import { IRootState } from "../../redux/types";
import { addCollectionAndDocuments } from "firebase/firebase.utils";

const HomePage = ({
  newMovies,
  popularMovies,
  upcomingMovies,
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
      <button onClick={() => addCollectionAndDocuments("movies", movies)}>
        UPLOAD DUMP DATA
      </button>
      <Tabs tabs={tabsData} />
    </main>
  );
};

const mapStateToProps = createStructuredSelector<IRootState, IHomePageProps>({
  newMovies: selectNewMovies,
  popularMovies: selectPopularMovies,
  upcomingMovies: selectUpcomingMovies,
});

export default connect(mapStateToProps)(HomePage);
