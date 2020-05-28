import { IMoviesList } from "../../components/movies-list/types";

export const MovieActionNames = {
  FETCH_MOVIES_START: "FETCH_MOVIES_START",
  FETCH_MOVIES_SUCCESS: "FETCH_MOVIES_SUCCESS",
  FETCH_MOVIES_FAILURE: "FETCH_MOVIES_FAILURE",
};

interface FetchMoviesStartAction {
  type: typeof MovieActionNames.FETCH_MOVIES_START;
  payload: any;
}

interface FetchMoviesSuccessAction {
  type: typeof MovieActionNames.FETCH_MOVIES_SUCCESS;
  payload: IMoviesList;
}

interface FetchMoviesFailureAction {
  type: typeof MovieActionNames.FETCH_MOVIES_FAILURE;
  payload: string;
}

export type MovieActionTypes =
  | FetchMoviesStartAction
  | FetchMoviesSuccessAction
  | FetchMoviesFailureAction;
