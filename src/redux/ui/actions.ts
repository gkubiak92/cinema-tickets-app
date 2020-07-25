import {
  UIActionNames,
  IToggleSidedrawerAction,
  ISpinnerStart,
  ISpinnerFinish,
  IShowSearchBar,
  IHideSearchBar,
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

export const showSearchBar = (): IShowSearchBar => ({
  type: UIActionNames.SHOW_SEARCH_BAR,
})

export const hideSearchBar = (): IHideSearchBar => ({
  type: UIActionNames.HIDE_SEARCH_BAR,
})