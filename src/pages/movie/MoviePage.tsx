import React, { useEffect } from "react";
import { RouteComponentProps } from "react-router-dom";
import { connect } from "react-redux";
import { selectMovie } from "redux/movies/selectors";
import { IRootState } from "redux/types";
import { fetchScreeningsStart } from "redux/screenings/actions";
import "./styles.scss";
import Rating from "components/Rating/Rating";
import Slider from "components/Slider/Slider";
import MovieThumbnail from "components/MovieThumbnail/MovieThumbnail";
import ScreeningDatesContainer from "components/ScreeningDates/ScreeningDatesContainer";
import { IMoviePageMatchParams, IMoviePageProps } from "./types";

const MoviePage = ({
  movie,
  fetchScreeningsStart,
  match,
}: IMoviePageProps & RouteComponentProps<IMoviePageMatchParams>) => {
  useEffect(() => {
    fetchScreeningsStart(match.params.movieId);
  }, [fetchScreeningsStart, match.params.movieId]);

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

const mapDispatchToProps = {
  fetchScreeningsStart,
};

export default connect(mapStateToProps, mapDispatchToProps)(MoviePage);
