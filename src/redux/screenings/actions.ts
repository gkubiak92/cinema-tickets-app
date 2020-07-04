import {
  IFetchMovieScreeningsStartAction,
  ScreeningsActionNames,
  IFetchMovieScreeningsSuccessAction,
  IFetchMovieScreeningsFailureAction,
} from "./types";
import { IScreening } from "api/types";

export const fetchScreeningsStart = (
  movieId: string
): IFetchMovieScreeningsStartAction => ({
  type: ScreeningsActionNames.FETCH_MOVIE_SCREENINGS_START,
  payload: movieId,
});

export const fetchScreeningsSuccess = (
  screenings: IScreening[]
): IFetchMovieScreeningsSuccessAction => ({
  type: ScreeningsActionNames.FETCH_MOVIE_SCREENINGS_SUCCESS,
  payload: screenings,
});

export const fetchScreeningsFailure = (
  error: string
): IFetchMovieScreeningsFailureAction => ({
  type: ScreeningsActionNames.FETCH_MOVIE_SCREENINGS_FAILURE,
  payload: error,
});
