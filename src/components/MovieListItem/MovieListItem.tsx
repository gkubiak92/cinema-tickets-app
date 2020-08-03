import React from "react";
import "./styles.scss";
import { IMovieListItemProps } from "./types";
import Rating from "components/Rating/Rating";
import MovieThumbnail from "components/MovieThumbnail/MovieThumbnail";
import { useDispatch } from "react-redux";
import { hideSearchBar } from "redux/ui/actions";

const MovieListItem = ({ movie }: IMovieListItemProps) => {
  const dispatch = useDispatch();

  return (
    <div className="movie-list-item" onClick={() => dispatch(hideSearchBar())}>
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
