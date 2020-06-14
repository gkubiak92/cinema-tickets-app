import { ISeat } from "components/seat/types";

export const ReservationActionNames = {
  SET_RESERVATION_MOVIE_ID: "SET_RESERVATION_MOVIE_ID",
  SET_RESERVATION_DATE: "SET_RESERVATION_DATE",
  SET_RESERVATION_HOUR: "SET_RESERVATION_HOUR",
  SET_RESERVATION_HALL_ID: "SET_RESERVATION_HALL_ID",
  ADD_SEAT_TO_RESERVATION: "ADD_SEAT_TO_RESERVATION",
  REMOVE_SEAT_FROM_RESERVATION: "REMOVE_SEAT_FROM_RESERVATION",
  RESET_SELECTED_SEATS: "RESET_SELECTED_SEATS",
};

interface ISetReservationMovieId {
  type: typeof ReservationActionNames.SET_RESERVATION_MOVIE_ID;
  payload: string;
}

interface ISetReservationDate {
  type: typeof ReservationActionNames.SET_RESERVATION_DATE;
  payload: string;
}

interface ISetReservationHour {
  type: typeof ReservationActionNames.SET_RESERVATION_HOUR;
  payload: string;
}

interface ISetReservationHallId {
  type: typeof ReservationActionNames.SET_RESERVATION_HALL_ID;
  payload: string;
}

interface IAddSeatToReservation {
  type: typeof ReservationActionNames.ADD_SEAT_TO_RESERVATION;
  payload: ISeat;
}

interface IRemoveSeatFromReservation {
  type: typeof ReservationActionNames.REMOVE_SEAT_FROM_RESERVATION;
  payload: ISeat;
}

interface IResetSelectedSeats {
  type: typeof ReservationActionNames.RESET_SELECTED_SEATS;
  payload: null;
}

export type ReservationActionTypes =
  | ISetReservationDate
  | ISetReservationHour
  | ISetReservationMovieId
  | IAddSeatToReservation
  | IRemoveSeatFromReservation
  | IResetSelectedSeats
  | ISetReservationHallId;

export interface IReservationState {
  movieId: string;
  date: string;
  hour: string;
  hallId: string;
  selectedSeats: ISeat[];
}
