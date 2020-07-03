import {
  MovieActionNames,
  IFetchMoviesStartAction,
  IFetchMoviesSuccessAction,
  IFetchMoviesFailureAction,
} from "./types";
import { IMovie } from "api/types";

export const fetchMoviesStart = (): IFetchMoviesStartAction => ({
  type: MovieActionNames.FETCH_MOVIES_START,
});

export const fetchMoviesSuccess = (
  movies: IMovie[]
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
