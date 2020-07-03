import { ISeat } from "components/seat/types";
import { ISeatArrangement } from "api/types";

export enum ReservationActionNames {
  SET_RESERVATION_MOVIE_ID = "SET_RESERVATION_MOVIE_ID",
  SET_RESERVATION_DATE = "SET_RESERVATION_DATE",
  SET_RESERVATION_HOUR = "SET_RESERVATION_HOUR",
  SET_RESERVATION_HALL_ID = "SET_RESERVATION_HALL_ID",
  ADD_SEAT_TO_RESERVATION = "ADD_SEAT_TO_RESERVATION",
  REMOVE_SEAT_FROM_RESERVATION = "REMOVE_SEAT_FROM_RESERVATION",
  RESET_SELECTED_SEATS = "RESET_SELECTED_SEATS",
  FETCH_SEAT_ARRANGEMENT_START = "FETCH_SEAT_ARRANGEMENT_START",
  FETCH_SEAT_ARRANGEMENT_SUCCESS = "FETCH_SEAT_ARRANGEMENT_SUCCESS",
  FETCH_SEAT_ARRANGEMENT_FAILURE = "FETCH_SEAT_ARRANGEMENT_FAILURE",
}

export interface ISetReservationMovieIdAction {
  type: ReservationActionNames.SET_RESERVATION_MOVIE_ID;
  payload: string;
}

export interface ISetReservationDateAction {
  type: ReservationActionNames.SET_RESERVATION_DATE;
  payload: string;
}

export interface ISetReservationHourAction {
  type: ReservationActionNames.SET_RESERVATION_HOUR;
  payload: string;
}

export interface ISetReservationHallIdAction {
  type: ReservationActionNames.SET_RESERVATION_HALL_ID;
  payload: string;
}

export interface IAddSeatToReservationAction {
  type: ReservationActionNames.ADD_SEAT_TO_RESERVATION;
  payload: ISeat;
}

export interface IRemoveSeatFromReservationAction {
  type: ReservationActionNames.REMOVE_SEAT_FROM_RESERVATION;
  payload: ISeat;
}

export interface IResetSelectedSeatsAction {
  type: ReservationActionNames.RESET_SELECTED_SEATS;
}

export interface IFetchSeatArrangementStartAction {
  type: ReservationActionNames.FETCH_SEAT_ARRANGEMENT_START;
}

export interface IFetchSeatArrangementSuccessAction {
  type: ReservationActionNames.FETCH_SEAT_ARRANGEMENT_SUCCESS;
  payload: ISeatArrangement;
}

export interface IFetchSeatArrangementFailureAction {
  type: ReservationActionNames.FETCH_SEAT_ARRANGEMENT_FAILURE;
  payload: string;
}

export type ReservationActionTypes =
  | ISetReservationDateAction
  | ISetReservationHourAction
  | ISetReservationMovieIdAction
  | IAddSeatToReservationAction
  | IRemoveSeatFromReservationAction
  | IResetSelectedSeatsAction
  | ISetReservationHallIdAction
  | IFetchSeatArrangementStartAction
  | IFetchSeatArrangementSuccessAction
  | IFetchSeatArrangementFailureAction;

export interface IReservationState {
  movieId: string;
  date: string;
  hour: string;
  hallId: string;
  seatArrangement: ISeatArrangement;
  selectedSeats: ISeat[];
}
