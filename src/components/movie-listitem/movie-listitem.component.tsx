import React from "react";
import "./movie-listitem.styles.scss";
import { IMovieProps } from "./types";
import Rating from '../rating/rating.component'

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
        <Rating rating={movie.rating} />
      </div>
    </div>
  );
};

export default MovieListItem;
