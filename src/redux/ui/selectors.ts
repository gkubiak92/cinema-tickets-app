import { IRootState } from "../types";
import { createSelector } from "reselect";

export const selectUI = (state: IRootState) => state.ui;

export const selectIsSideDrawerShown = createSelector(
    selectUI,
    (ui) => ui.show
);