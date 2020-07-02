import {
  IFetchScreeningsStartAction,
  ScreeningsActionNames,
  IFetchScreeningsSuccessAction,
  IFetchScreeningsFailureAction,
} from "./types";
import { IScreening } from "api/types";

export const fetchScreeningsStart = (): IFetchScreeningsStartAction => ({
  type: ScreeningsActionNames.FETCH_SCREENINGS_START,
});

export const fetchScreeningsSuccess = (
  screenings: IScreening[]
): IFetchScreeningsSuccessAction => ({
  type: ScreeningsActionNames.FETCH_SCREENINGS_SUCCESS,
  payload: screenings,
});

export const fetchScreeningsFailure = (
  error: string
): IFetchScreeningsFailureAction => ({
  type: ScreeningsActionNames.FETCH_SCREENINGS_FAILURE,
  payload: error,
});
