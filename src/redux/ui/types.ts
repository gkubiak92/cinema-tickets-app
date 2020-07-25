export enum UIActionNames {
  TOGGLE_SIDEDRAWER = "TOGGLE_SIDEDRAWER",
  SPINNER_START = "SPINNER_START",
  SPINNER_FINISH = "SPINNER_FINISH",
  SHOW_SEARCH_BAR = "SHOW_SEARCH_BAR",
  HIDE_SEARCH_BAR = "HIDE_SEARCH_BAR",
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

export interface IShowSearchBar {
  type: UIActionNames.SHOW_SEARCH_BAR
}

export interface IHideSearchBar {
  type: UIActionNames.HIDE_SEARCH_BAR
}

export type UIActionTypes =
  | IToggleSidedrawerAction
  | ISpinnerStart
  | ISpinnerFinish
  | IShowSearchBar
  | IHideSearchBar;

export interface IUIState {
  show: boolean;
  spinner: boolean;
  showSearchBar: boolean;
}
