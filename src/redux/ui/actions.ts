import {
  UIActionNames,
  IToggleSidedrawerAction,
  ISpinnerStart,
  ISpinnerFinish,
} from "./types";

export const toggleSideDrawer = (): IToggleSidedrawerAction => ({
  type: UIActionNames.TOGGLE_SIDEDRAWER,
});

export const spinnerStart = (): ISpinnerStart => ({
  type: UIActionNames.SPINNER_START,
});

export const spinnerFinish = (): ISpinnerFinish => ({
  type: UIActionNames.SPINNER_FINISH,
});
