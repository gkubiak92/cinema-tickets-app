import { IRootState } from "redux/types";
import { createSelector } from "reselect";

const selectScreeningDates = (state: IRootState) =>
  state.screenings.screeningDates;

export const selectMovieScreeningDates = (id: string) =>
  createSelector(selectScreeningDates, (screeningDates) => screeningDates[id]);
