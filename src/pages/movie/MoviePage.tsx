import React from "react";
import "./styles.scss";
import { RouteComponentProps } from "react-router-dom";
import { selectMovie } from "redux/movies/selectors";
import { connect } from "react-redux";
import Rating from "components/rating/rating.component";
import { IMoviePageMatchParams, IMoviePageState } from "./types";
import { IRootState } from "redux/types";
import Slider from "components/slider/slider.component";
import MovieThumbnail from "components/movie-thumbnail/moviethumbnail.component";
import ScreeningDatesContainer from "components/screening-dates/screening-dates.container";

const MoviePage = ({ movie }: IMoviePageState) => {
  return movie ? (
    <div className="movie-page">
      <Slider interval={2000} slides={movie.photosUrl} />
      <div className="movie-header">
        <MovieThumbnail thumbnailUrl={movie.thumbnailUrl} />
        <div className="main-info">
          <h1 className="page-title">{movie.title}</h1>
          <Rating rating={movie.rating} />
        </div>
      </div>
      <p className="description">{movie.description}</p>
      <ScreeningDatesContainer movie={movie} />
    </div>
  ) : (
    <div className="movie-page">Not found</div>
  );
};

const mapStateToProps = (
  state: IRootState,
  ownProps: RouteComponentProps<IMoviePageMatchParams>
) => ({
  movie: selectMovie(ownProps.match.params.movieId)(state),
});

export default connect(mapStateToProps)(MoviePage);
