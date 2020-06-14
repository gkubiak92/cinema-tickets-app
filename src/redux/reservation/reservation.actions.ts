import { ReservationActionNames } from "./reservation.types";
import { ISeat } from "components/seat/types";

export const setReservationMovieId = (movieId: string) => ({
  type: ReservationActionNames.SET_RESERVATION_MOVIE_ID,
  payload: movieId,
});

export const setReservationDate = (date: string) => ({
  type: ReservationActionNames.SET_RESERVATION_DATE,
  payload: date,
});

export const setReservationHour = (hour: string) => ({
  type: ReservationActionNames.SET_RESERVATION_HOUR,
  payload: hour,
});

export const setReservationHallId = (hallId: string) => ({
  type: ReservationActionNames.SET_RESERVATION_HALL_ID,
  payload: hallId,
});

export const addSeatToReservation = (seat: ISeat) => ({
  type: ReservationActionNames.ADD_SEAT_TO_RESERVATION,
  payload: seat,
});

export const removeSeatFromReservation = (seat: ISeat) => ({
  type: ReservationActionNames.REMOVE_SEAT_FROM_RESERVATION,
  payload: seat,
});

export const resetSelectedSeats = () => ({
  type: ReservationActionNames.RESET_SELECTED_SEATS,
  payload: null,
});
