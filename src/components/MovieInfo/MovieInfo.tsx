import React from "react";
import "./styles.scss";
import MovieThumbnail from "components/MovieThumbnail/MovieThumbnail";
import { IMovieInfoProps } from "./types";

const MovieInfo = ({ movie, date, hour }: IMovieInfoProps) => (
  <div className="movie-info">
    <MovieThumbnail thumbnailUrl={movie.thumbnailUrl} />
    <div className="movie-details">
      <h1>{movie!.title}</h1>
      <p>{date}</p>
      <p>{hour}</p>
    </div>
  </div>
);

export default MovieInfo;
