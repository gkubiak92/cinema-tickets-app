import { IRootState } from "redux/types";
import { createSelector } from "reselect";

const selectScreenings = (state: IRootState) => state.screenings;

export const selectScreening = (id: string) =>
  createSelector(selectScreenings, ({ screenings }) =>
    screenings.find((screening) => screening.id === id)
  );

const selectScreeningDates = (state: IRootState) =>
  state.screenings.screeningDates;

export const selectMovieScreeningDates = (id: string) =>
  createSelector(selectScreeningDates, (screeningDates) => screeningDates[id]);

export const selectMovieScreeningBookedSeats = (id: string) =>
  createSelector(selectScreening(id), (screening) => screening!.bookedSeats);
