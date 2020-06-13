import { IMoviesList } from "../../components/movies-list/types";
import { IMovie } from "components/movie-listitem/types";

export const MovieActionNames = {
  FETCH_MOVIES_START: "FETCH_MOVIES_START",
  FETCH_MOVIES_SUCCESS: "FETCH_MOVIES_SUCCESS",
  FETCH_MOVIES_FAILURE: "FETCH_MOVIES_FAILURE",
  FETCH_MOVIE_BOOKED_SEATS_START: "FETCH_MOVIE_BOOKED_SEATS_START",
  FETCH_MOVIE_BOOKED_SEATS_SUCCESS: "FETCH_MOVIE_BOOKED_SEATS_SUCCESS",
  FETCH_MOVIE_BOOKED_SEATS_FAILURE: "FETCH_MOVIE_BOOKED_SEATS_FAILURE",
};

interface IFetchMoviesStartAction {
  type: typeof MovieActionNames.FETCH_MOVIES_START;
  payload: any;
}

interface IFetchMoviesSuccessAction {
  type: typeof MovieActionNames.FETCH_MOVIES_SUCCESS;
  payload: IMoviesList;
}

interface IFetchMoviesFailureAction {
  type: typeof MovieActionNames.FETCH_MOVIES_FAILURE;
  payload: string;
}

export interface IFetchMovieBookedSeatsStart {
  type: typeof MovieActionNames.FETCH_MOVIE_BOOKED_SEATS_START,
  payload: string,
}

interface IFetchMovieBookedSeatsSuccess {
  type: typeof MovieActionNames.FETCH_MOVIE_BOOKED_SEATS_SUCCESS,
  payload: IMovie
}

interface IFetchMovieBookedSeatsFailure {
  type: typeof MovieActionNames.FETCH_MOVIE_BOOKED_SEATS_FAILURE,
  payload: string
}

export type MovieActionTypes =
  | IFetchMoviesStartAction
  | IFetchMoviesSuccessAction
  | IFetchMoviesFailureAction
  | IFetchMovieBookedSeatsStart
  | IFetchMovieBookedSeatsSuccess
  | IFetchMovieBookedSeatsFailure;

export interface IMoviesState {
  movies: IMoviesList,
  isFetching: boolean,
  error: string,
}