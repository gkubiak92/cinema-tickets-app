import React from "react";
import "./styles.scss";
import MovieThumbnail from "components/MovieInfo/MovieThumbnail/MovieThumbnail";
import { IMovieInfoProps } from "./types";

const MovieInfo = ({ movie, date, hour }: IMovieInfoProps) => {
  const formatDate = (date: string) => {
    try {
      const parsedDate = new Date(date);
      const fDate = new Intl.DateTimeFormat('pl-PL').format(parsedDate);
      return fDate;
    } catch (error) {
      console.log('Invalid date format');
      return '';
    }
  }

  return (
    <div className="movie-info">
      <MovieThumbnail thumbnailUrl={movie.thumbnailUrl} />
      <div className="movie-details">
        <h1>{movie.title}</h1>
        <p>{formatDate(date)}</p>
        <p>{hour}</p>
      </div>
    </div>
  )
};

export default MovieInfo;
