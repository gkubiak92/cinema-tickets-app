import React from "react";
import "./movie-listitem.styles.scss";
import { IMovieListItemProps } from "./types";
import Rating from "components/rating/rating.component";
import MovieThumbnail from "components/movie-thumbnail/moviethumbnail.component";

const MovieListItem = ({ movie }: IMovieListItemProps) => {
  return (
    <div className="movie-list-item">
      <MovieThumbnail thumbnailUrl={movie.thumbnailUrl} />
      <div className="content">
        <header>{movie.title}</header>
        <Rating rating={movie.rating} />
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
