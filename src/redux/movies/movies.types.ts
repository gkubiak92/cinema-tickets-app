import { IMoviesList } from "../../components/movies-list/types";

export const MovieActionNames = {
  FETCH_MOVIES_START: "FETCH_MOVIES_START",
  FETCH_MOVIES_SUCCESS: "FETCH_MOVIES_SUCCESS",
  FETCH_MOVIES_FAILURE: "FETCH_MOVIES_FAILURE",
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

export type MovieActionTypes =
  | IFetchMoviesStartAction
  | IFetchMoviesSuccessAction
  | IFetchMoviesFailureAction;

export interface IMoviesState {
  movies: IMoviesList,
  isFetching: boolean,
  error: string,
}