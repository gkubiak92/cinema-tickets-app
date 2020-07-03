import {
  MovieActionNames,
  IFetchMoviesStartAction,
  IFetchMoviesSuccessAction,
  IFetchMoviesFailureAction,
  IFetchMovieBookedSeatsStart,
  IFetchMovieBookedSeatsSuccess,
  IFetchMovieBookedSeatsFailure,
} from "./types";
import { IMoviesList } from "components/MoviesList/types";
import { IMovie } from "api/types";

export const fetchMoviesStart = (): IFetchMoviesStartAction => ({
  type: MovieActionNames.FETCH_MOVIES_START,
});

export const fetchMoviesSuccess = (
  movies: IMoviesList
): IFetchMoviesSuccessAction => ({
  type: MovieActionNames.FETCH_MOVIES_SUCCESS,
  payload: movies,
});

export const fetchMoviesFailure = (
  error: string
): IFetchMoviesFailureAction => ({
  type: MovieActionNames.FETCH_MOVIES_FAILURE,
  payload: error,
});

export const fetchMovieBookedSeatsStart = (
  movieId: string
): IFetchMovieBookedSeatsStart => ({
  type: MovieActionNames.FETCH_MOVIE_BOOKED_SEATS_START,
  payload: movieId,
});

export const fetchMovieBookedSeatsSuccess = (
  movie: IMovie
): IFetchMovieBookedSeatsSuccess => ({
  type: MovieActionNames.FETCH_MOVIE_BOOKED_SEATS_SUCCESS,
  payload: movie,
});

export const fetchMovieBookedSeatsFailure = (
  error: string
): IFetchMovieBookedSeatsFailure => ({
  type: MovieActionNames.FETCH_MOVIE_BOOKED_SEATS_FAILURE,
  payload: error,
});
