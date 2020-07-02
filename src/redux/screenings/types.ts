import { IScreening } from "api/types";
import { IScreeningDate } from "components/movie-listitem/types";

export enum ScreeningsActionNames {
  FETCH_SCREENINGS_START = "FETCH_SCREENINGS_START",
  FETCH_SCREENINGS_SUCCESS = "FETCH_SCREENINGS_SUCCESS",
  FETCH_SCREENINGS_FAILURE = "FETCH_SCREENINGS_FAILURE",
}

export interface IFetchScreeningsStartAction {
  type: ScreeningsActionNames.FETCH_SCREENINGS_START;
}

export interface IFetchScreeningsSuccessAction {
  type: ScreeningsActionNames.FETCH_SCREENINGS_SUCCESS;
  payload: IScreening[];
}

export interface IFetchScreeningsFailureAction {
  type: ScreeningsActionNames.FETCH_SCREENINGS_FAILURE;
  payload: string;
}

export type ScreeningsActionTypes =
  | IFetchScreeningsStartAction
  | IFetchScreeningsSuccessAction
  | IFetchScreeningsFailureAction;

interface IScreeningDates {
  [key: string]: IScreeningDate[];
}

export interface IScreeningsState {
  screenings: IScreening[];
  screeningDates: IScreeningDates;
  isFetching: boolean;
  error: string;
}
