import { IRootState } from "redux/types";
import { createSelector } from "reselect";
import { getSortedKeyValuePairs } from "redux/utils";

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

export const selectReservationHallId = createSelector(
  selectReservation,
  (reservation) => reservation.hallId
);

export const selectSelectedSeats = createSelector(
  selectReservation,
  (reservation) => reservation.selectedSeats
);

export const selectSelectedSeatsCount = createSelector(
  selectReservation,
  (reservation) => reservation.selectedSeats.length
);

export const selectHallSeatArrangement = createSelector(
  selectReservation,
  ({ hallData: { seatArrangement } }) => getSortedKeyValuePairs(seatArrangement)
);
