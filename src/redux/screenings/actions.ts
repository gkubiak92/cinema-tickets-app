import {
  IFetchMovieScreeningsStartAction,
  ScreeningsActionNames,
  IFetchMovieScreeningsSuccessAction,
  IFetchMovieScreeningsFailureAction,
} from "./types";
import { IScreening } from "api/types";

export const fetchMovieScreeningsStart = (
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

export const addBookedSeatsToScreeningStart = (payload: {
  screeningId: string;
  bookedSeats: string[];
}) => ({
  type: ScreeningsActionNames.ADD_BOOKED_SEATS_TO_SCREENING_START,
  payload,
});

export const addBookedSeatsToScreeningSuccess = (message: string) => ({
  type: ScreeningsActionNames.ADD_BOOKED_SEATS_TO_SCREENING_SUCCESS,
  payload: message,
});

export const addBookedSeatsToScreeningFailure = (error: string) => ({
  type: ScreeningsActionNames.ADD_BOOKED_SEATS_TO_SCREENING_FAILURE,
  payload: error,
});
