import { ISeat } from "components/Seat/types";
import { IHallData } from "api/types";
import { PaymentFormValues } from "pages/payment/PaymentForm/types";

export enum ReservationActionNames {
  SET_RESERVATION_MOVIE_ID = "SET_RESERVATION_MOVIE_ID",
  SET_RESERVATION_DATE = "SET_RESERVATION_DATE",
  SET_RESERVATION_HOUR = "SET_RESERVATION_HOUR",
  SET_RESERVATION_HALL_ID = "SET_RESERVATION_HALL_ID",
  SET_RESERVATION_SCREENING_ID = "SET_RESERVATION_SCREENING_ID",
  ADD_SEAT_TO_RESERVATION = "ADD_SEAT_TO_RESERVATION",
  REMOVE_SEAT_FROM_RESERVATION = "REMOVE_SEAT_FROM_RESERVATION",
  RESET_SELECTED_SEATS = "RESET_SELECTED_SEATS",
  FETCH_HALL_DATA_START = "FETCH_HALL_DATA_START",
  FETCH_HALL_DATA_SUCCESS = "FETCH_HALL_DATA_SUCCESS",
  FETCH_HALL_DATA_FAILURE = "FETCH_HALL_DATA_FAILURE",
  ADD_RESERVATION_START = "ADD_RESERVATION_START",
  ADD_RESERVATION_SUCCESS = "ADD_RESERVATION_SUCCESS",
  ADD_RESERVATION_FAILURE = "ADD_RESERVATION_FAILURE",
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

export interface ISetReservationScreeningIdAction {
  type: ReservationActionNames.SET_RESERVATION_SCREENING_ID;
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

export interface IFetchHallDataStartAction {
  type: ReservationActionNames.FETCH_HALL_DATA_START;
}

export interface IFetchHallDataSuccessAction {
  type: ReservationActionNames.FETCH_HALL_DATA_SUCCESS;
  payload: IHallData;
}

export interface IFetchHallDataFailureAction {
  type: ReservationActionNames.FETCH_HALL_DATA_FAILURE;
  payload: string;
}

export interface IAddReservationStartAction {
  type: ReservationActionNames.ADD_RESERVATION_START;
  payload: PaymentFormValues;
}

export interface IAddReservationSuccessAction {
  type: ReservationActionNames.ADD_RESERVATION_SUCCESS;
  payload: string;
}

export interface IAddReservationFailureAction {
  type: ReservationActionNames.ADD_RESERVATION_FAILURE;
  payload: string;
}

export type ReservationActionTypes =
  | ISetReservationDateAction
  | ISetReservationHourAction
  | ISetReservationMovieIdAction
  | ISetReservationScreeningIdAction
  | IAddSeatToReservationAction
  | IRemoveSeatFromReservationAction
  | IResetSelectedSeatsAction
  | ISetReservationHallIdAction
  | IFetchHallDataStartAction
  | IFetchHallDataSuccessAction
  | IFetchHallDataFailureAction
  | IAddReservationStartAction
  | IAddReservationSuccessAction
  | IAddReservationFailureAction;

export interface IReservationState {
  movieId: string;
  date: string;
  hour: string;
  hallId: string;
  hallData: IHallData;
  screeningId: string;
  selectedSeats: ISeat[];
}
