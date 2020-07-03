import {
  ReservationActionNames,
  ISetReservationMovieIdAction,
  ISetReservationDateAction,
  ISetReservationHourAction,
  ISetReservationHallIdAction,
  IAddSeatToReservationAction,
  IRemoveSeatFromReservationAction,
  IResetSelectedSeatsAction,
  IFetchSeatArrangementStartAction,
  IFetchSeatArrangementSuccessAction,
  IFetchSeatArrangementFailureAction,
} from "./types";
import { ISeat } from "components/Seat/types";
import { ISeatArrangement } from "api/types";

export const setReservationMovieId = (
  movieId: string
): ISetReservationMovieIdAction => ({
  type: ReservationActionNames.SET_RESERVATION_MOVIE_ID,
  payload: movieId,
});

export const setReservationDate = (
  date: string
): ISetReservationDateAction => ({
  type: ReservationActionNames.SET_RESERVATION_DATE,
  payload: date,
});

export const setReservationHour = (
  hour: string
): ISetReservationHourAction => ({
  type: ReservationActionNames.SET_RESERVATION_HOUR,
  payload: hour,
});

export const setReservationHallId = (
  hallId: string
): ISetReservationHallIdAction => ({
  type: ReservationActionNames.SET_RESERVATION_HALL_ID,
  payload: hallId,
});

export const addSeatToReservation = (
  seat: ISeat
): IAddSeatToReservationAction => ({
  type: ReservationActionNames.ADD_SEAT_TO_RESERVATION,
  payload: seat,
});

export const removeSeatFromReservation = (
  seat: ISeat
): IRemoveSeatFromReservationAction => ({
  type: ReservationActionNames.REMOVE_SEAT_FROM_RESERVATION,
  payload: seat,
});

export const resetSelectedSeats = (): IResetSelectedSeatsAction => ({
  type: ReservationActionNames.RESET_SELECTED_SEATS,
});

export const fetchSeatArrangementStart = (): IFetchSeatArrangementStartAction => ({
  type: ReservationActionNames.FETCH_SEAT_ARRANGEMENT_START,
});

export const fetchSeatArrangementSuccess = (
  seatArrangement: ISeatArrangement
): IFetchSeatArrangementSuccessAction => ({
  type: ReservationActionNames.FETCH_SEAT_ARRANGEMENT_SUCCESS,
  payload: seatArrangement,
});

export const fetchSeatArrangementFailure = (
  error: string
): IFetchSeatArrangementFailureAction => ({
  type: ReservationActionNames.FETCH_SEAT_ARRANGEMENT_FAILURE,
  payload: error,
});
