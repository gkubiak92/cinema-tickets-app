export enum UIActionNames {
  TOGGLE_SIDEDRAWER = "TOGGLE_SIDEDRAWER",
  SPINNER_START = "SPINNER_START",
  SPINNER_FINISH = "SPINNER_FINISH",
}

export interface IToggleSidedrawerAction {
  type: UIActionNames.TOGGLE_SIDEDRAWER;
}

export interface ISpinnerStart {
  type: UIActionNames.SPINNER_START;
}

export interface ISpinnerFinish {
  type: UIActionNames.SPINNER_FINISH;
}

export type UIActionTypes =
  | IToggleSidedrawerAction
  | ISpinnerStart
  | ISpinnerFinish;

export interface IUIState {
  show: boolean;
  spinner: boolean;
}
