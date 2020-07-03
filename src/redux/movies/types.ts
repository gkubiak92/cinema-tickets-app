import { IMoviesList } from "components/MoviesList/types";
import { IMovie } from "api/types";

export enum MovieActionNames {
  FETCH_MOVIES_START = "FETCH_MOVIES_START",
  FETCH_MOVIES_SUCCESS = "FETCH_MOVIES_SUCCESS",
  FETCH_MOVIES_FAILURE = "FETCH_MOVIES_FAILURE",
  FETCH_MOVIE_BOOKED_SEATS_START = "FETCH_MOVIE_BOOKED_SEATS_START",
  FETCH_MOVIE_BOOKED_SEATS_SUCCESS = "FETCH_MOVIE_BOOKED_SEATS_SUCCESS",
  FETCH_MOVIE_BOOKED_SEATS_FAILURE = "FETCH_MOVIE_BOOKED_SEATS_FAILURE",
}

export interface IFetchMoviesStartAction {
  type: MovieActionNames.FETCH_MOVIES_START;
}

export interface IFetchMoviesSuccessAction {
  type: MovieActionNames.FETCH_MOVIES_SUCCESS;
  payload: IMoviesList;
}

export interface IFetchMoviesFailureAction {
  type: MovieActionNames.FETCH_MOVIES_FAILURE;
  payload: string;
}

export interface IFetchMovieBookedSeatsStart {
  type: MovieActionNames.FETCH_MOVIE_BOOKED_SEATS_START;
  payload: string;
}

export interface IFetchMovieBookedSeatsSuccess {
  type: MovieActionNames.FETCH_MOVIE_BOOKED_SEATS_SUCCESS;
  payload: IMovie;
}

export interface IFetchMovieBookedSeatsFailure {
  type: MovieActionNames.FETCH_MOVIE_BOOKED_SEATS_FAILURE;
  payload: string;
}

export type MovieActionTypes =
  | IFetchMoviesStartAction
  | IFetchMoviesSuccessAction
  | IFetchMoviesFailureAction
  | IFetchMovieBookedSeatsStart
  | IFetchMovieBookedSeatsSuccess
  | IFetchMovieBookedSeatsFailure;

export interface IMoviesState {
  movies: IMoviesList;
  isFetching: boolean;
  error: string;
}
