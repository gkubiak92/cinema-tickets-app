import { ReservationActionNames } from "./reservation.types";

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
