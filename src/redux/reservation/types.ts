import { ISeat } from "components/seat/types";

export enum ReservationActionNames {
  SET_RESERVATION_MOVIE_ID = "SET_RESERVATION_MOVIE_ID",
  SET_RESERVATION_DATE = "SET_RESERVATION_DATE",
  SET_RESERVATION_HOUR = "SET_RESERVATION_HOUR",
  SET_RESERVATION_HALL_ID = "SET_RESERVATION_HALL_ID",
  ADD_SEAT_TO_RESERVATION = "ADD_SEAT_TO_RESERVATION",
  REMOVE_SEAT_FROM_RESERVATION = "REMOVE_SEAT_FROM_RESERVATION",
  RESET_SELECTED_SEATS = "RESET_SELECTED_SEATS",
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

export type ReservationActionTypes =
  | ISetReservationDateAction
  | ISetReservationHourAction
  | ISetReservationMovieIdAction
  | IAddSeatToReservationAction
  | IRemoveSeatFromReservationAction
  | IResetSelectedSeatsAction
  | ISetReservationHallIdAction;

export interface IReservationState {
  movieId: string;
  date: string;
  hour: string;
  hallId: string;
  selectedSeats: ISeat[];
}
