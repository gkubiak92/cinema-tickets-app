import React from "react";
import { IMoviesListProps } from "./types";
import MovieListItem from "components/MovieListItem/MovieListItem";
import "./styles.scss";
import { Link } from "react-router-dom";

const MoviesList = ({ movies }: IMoviesListProps) => {
  return (
    <div className="movie-list-container">
      {movies.map((movie) => (
        <Link key={movie.id} to={`/movie/${movie.id}`}>
          <MovieListItem key={movie.id} movie={movie} />
        </Link>
      ))}
    </div>
  );
};

export default MoviesList;
