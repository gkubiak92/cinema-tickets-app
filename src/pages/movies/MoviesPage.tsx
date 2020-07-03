import React from "react";
import { connect } from "react-redux";
import { createStructuredSelector } from "reselect";
import { selectAllMovies } from "../../redux/movies/selectors";
import { IRootState } from "../../redux/types";
import { IMoviesPageProps } from "./types";
import MoviesList from "../../components/MoviesList/MoviesList";
import "./styles.scss";

const MoviesPage = ({ movies }: IMoviesPageProps) => (
  <div className="movies-list">
    <h1 className="page-title">All movies</h1>
    <MoviesList movies={movies} />
  </div>
);

const mapStateToProps = createStructuredSelector<IRootState, IMoviesPageProps>({
  movies: selectAllMovies,
});

export default connect(mapStateToProps)(MoviesPage);
