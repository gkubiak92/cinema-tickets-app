import React from "react";
import { connect } from "react-redux";
import { selectAllMovies } from "redux/movies/selectors";
import { IRootState } from "redux/types";
import MoviesList from "pages/movies/components/MoviesList/MoviesList";
import "./styles.scss";
import { IMoviesPageProps } from "./types";

const MoviesPage = ({ movies }: IMoviesPageProps) => (
  <div className="movies-list">
    <h1 className="page-title">All movies</h1>
    <MoviesList movies={movies} />
  </div>
);

const mapStateToProps = (state: IRootState) => ({
  movies: selectAllMovies(state),
});

export default connect(mapStateToProps)(MoviesPage);
