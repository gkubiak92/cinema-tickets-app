import { MovieActionNames } from "./movies.types";
import { IMoviesList } from "../../components/movies-list/types";

export const fetchMoviesStart = () => ({
  type: MovieActionNames.FETCH_MOVIES_START,
  payload: null,
});

export const fetchMoviesSuccess = (movies: IMoviesList) => ({
  type: MovieActionNames.FETCH_MOVIES_SUCCESS,
  payload: movies,
});

export const fetchMoviesFailure = (error: string) => ({
  type: MovieActionNames.FETCH_MOVIES_FAILURE,
  payload: error,
});
