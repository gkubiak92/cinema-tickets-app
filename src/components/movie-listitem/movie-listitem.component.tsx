import React from "react";
import "./movie-listitem.styles.scss";
import { IMovieProps } from "./types";
import Rating from "components/rating/rating.component";
import MovieThumbnail from "components/movie-thumbnail/moviethumbnail.component";

const MovieListItem = ({ movie }: IMovieProps) => {
  return (
    <div className="movie-list-item">
      <MovieThumbnail thumbnailUrl={movie.thumbnailUrl} />
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
