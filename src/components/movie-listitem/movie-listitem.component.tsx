import React from "react";
import "./movie-listitem.styles.scss";
import { IMovieProps } from "./types";

const MovieListItem = ({ movie }: IMovieProps) => {
  return (
    <div className="movie-list-item">
      <div className="thumbnail">
        <img src={movie.thumbnailUrl} alt="" />
      </div>
      <div className="content">
        <header>{movie.title}</header>
        <p className="director">{movie.director}</p>
        {movie.genres.map((genre) => (
          <p key={genre} className="genre">
            {genre},
          </p>
        ))}
      </div>
    </div>
  );
};

export default MovieListItem;
