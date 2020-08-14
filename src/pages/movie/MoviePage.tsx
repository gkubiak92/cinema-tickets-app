import React, { useEffect } from "react";
import { RouteComponentProps } from "react-router-dom";
import { connect } from "react-redux";
import { selectMovie } from "redux/movies/selectors";
import { IRootState } from "redux/types";
import { fetchMovieScreeningsStart } from "redux/screenings/actions";
import "./styles.scss";
import Rating from "components/Rating/Rating";
import Slider from "components/Slider/Slider";
import MovieThumbnail from "components/MovieThumbnail/MovieThumbnail";
import ScreeningDatesContainer from "pages/movie/components/ScreeningDatesContainer";
import { IMoviePageMatchParams, IMoviePageProps } from "./types";

const MoviePage = ({
  movie,
  fetchMovieScreeningsStart,
  match,
}: IMoviePageProps & RouteComponentProps<IMoviePageMatchParams>) => {
  useEffect(() => {
    fetchMovieScreeningsStart(match.params.movieId);
  }, [fetchMovieScreeningsStart, match.params.movieId]);

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
      <ScreeningDatesContainer movieId={movie.id} />
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

const mapDispatchToProps = {
  fetchMovieScreeningsStart,
};

export default connect(mapStateToProps, mapDispatchToProps)(MoviePage);
