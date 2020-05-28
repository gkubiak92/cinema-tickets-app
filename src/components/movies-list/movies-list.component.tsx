import React from "react";
import { IMoviesListProps } from "./types";
import MovieListItem from "../movie-listitem/movie-listitem.component";
import "./movies-list.styles.scss";

const MoviesList = ({ movies }: IMoviesListProps) => {
  return (
    <div className="movie-list-container">
      {Object.entries(movies).map(([key, value]) => (
        <MovieListItem key={key} movie={value} />
      ))}
    </div>
  );
};

export default MoviesList;
