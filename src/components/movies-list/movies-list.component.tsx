import React from "react";
import { IMoviesListProps } from "./types";
import MovieListItem from "../movie-listitem/movie-listitem.component";
import "./movies-list.styles.scss";

const MoviesList = ({ movies }: IMoviesListProps) => {
  return (
    <div className="movie-list-container">
      {movies.map((movie) => <MovieListItem key={movie.id} movie={movie} />)}
    </div>
  );
};

export default MoviesList;
