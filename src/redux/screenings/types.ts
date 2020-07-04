import { IScreening, IScreeningDate } from "api/types";

export enum ScreeningsActionNames {
  FETCH_MOVIE_SCREENINGS_START = "FETCH_MOVIE_SCREENINGS_START",
  FETCH_MOVIE_SCREENINGS_SUCCESS = "FETCH_MOVIE_SCREENINGS_SUCCESS",
  FETCH_MOVIE_SCREENINGS_FAILURE = "FETCH_MOVIE_SCREENINGS_FAILURE",
}

export interface IFetchMovieScreeningsStartAction {
  type: ScreeningsActionNames.FETCH_MOVIE_SCREENINGS_START;
  payload: string;
}

export interface IFetchMovieScreeningsSuccessAction {
  type: ScreeningsActionNames.FETCH_MOVIE_SCREENINGS_SUCCESS;
  payload: IScreening[];
}

export interface IFetchMovieScreeningsFailureAction {
  type: ScreeningsActionNames.FETCH_MOVIE_SCREENINGS_FAILURE;
  payload: string;
}

export type ScreeningsActionTypes =
  | IFetchMovieScreeningsStartAction
  | IFetchMovieScreeningsSuccessAction
  | IFetchMovieScreeningsFailureAction;

export interface IScreeningDates {
  [key: string]: IScreeningDate[];
}

export interface IScreeningsState {
  screenings: IScreening[];
  screeningDates: IScreeningDates;
  isFetching: boolean;
  error: string;
}
