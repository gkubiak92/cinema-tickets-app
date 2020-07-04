import {
  ReservationActionNames,
  ISetReservationMovieIdAction,
  ISetReservationDateAction,
  ISetReservationHourAction,
  ISetReservationHallIdAction,
  IAddSeatToReservationAction,
  IRemoveSeatFromReservationAction,
  IResetSelectedSeatsAction,
  IFetchHallDataStartAction,
  IFetchHallDataSuccessAction,
  IFetchHallDataFailureAction,
} from "./types";
import { ISeat } from "components/Seat/types";
import { IHallData } from "api/types";

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

export const fetchHallDataStart = (): IFetchHallDataStartAction => ({
  type: ReservationActionNames.FETCH_HALL_DATA_START,
});

export const fetchHallDataSuccess = (
  hallData: IHallData
): IFetchHallDataSuccessAction => ({
  type: ReservationActionNames.FETCH_HALL_DATA_SUCCESS,
  payload: hallData,
});

export const fetchHalLDataFailure = (
  error: string
): IFetchHallDataFailureAction => ({
  type: ReservationActionNames.FETCH_HALL_DATA_FAILURE,
  payload: error,
});
