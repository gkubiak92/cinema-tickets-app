import { IMovie } from "api/types";

export enum MovieActionNames {
  FETCH_MOVIES_START = "FETCH_MOVIES_START",
  FETCH_MOVIES_SUCCESS = "FETCH_MOVIES_SUCCESS",
  FETCH_MOVIES_FAILURE = "FETCH_MOVIES_FAILURE",
}

export interface IFetchMoviesStartAction {
  type: MovieActionNames.FETCH_MOVIES_START;
}

export interface IFetchMoviesSuccessAction {
  type: MovieActionNames.FETCH_MOVIES_SUCCESS;
  payload: IMovie[];
}

export interface IFetchMoviesFailureAction {
  type: MovieActionNames.FETCH_MOVIES_FAILURE;
  payload: string;
}

export type MovieActionTypes =
  | IFetchMoviesStartAction
  | IFetchMoviesSuccessAction
  | IFetchMoviesFailureAction;

export interface IMoviesState {
  movies: IMovie[];
  isFetching: boolean;
  error: string;
}
