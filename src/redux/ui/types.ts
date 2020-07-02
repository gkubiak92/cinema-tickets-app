export enum UIActionNames {
  TOGGLE_SIDEDRAWER = "TOGGLE_SIDEDRAWER",
}

export interface IToggleSidedrawerAction {
  type: UIActionNames.TOGGLE_SIDEDRAWER;
}

export type UIActionTypes = IToggleSidedrawerAction;

export interface IUIState {
  show: boolean;
}
