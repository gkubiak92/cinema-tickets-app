import { IRootState } from "redux/types";
import { createSelector } from "reselect";

export const selectReservation = (state: IRootState) => state.reservation;

export const selectReservationMovieId = createSelector(
  selectReservation,
  (reservation) => reservation.movieId
);

export const selectReservationDate = createSelector(
  selectReservation,
  (reservation) => reservation.date
);

export const selectReservationHour = createSelector(
  selectReservation,
  (reservation) => reservation.hour
);

export const selectSelectedSeatsCount = createSelector(
  selectReservation,
  (reservation) => reservation.selectedSeats.length
);
