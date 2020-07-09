import { IUIState, UIActionTypes, UIActionNames } from "./types";

const INITIAL_STATE: IUIState = {
  show: false,
  spinner: false,
};

const uiReducer = (state = INITIAL_STATE, action: UIActionTypes) => {
  switch (action.type) {
    case UIActionNames.TOGGLE_SIDEDRAWER:
      return {
        ...state,
        show: !state.show,
      };
    case UIActionNames.SPINNER_START:
      return {
        ...state,
        spinner: true,
      };
    case UIActionNames.SPINNER_FINISH:
      return {
        ...state,
        spinner: false,
      };
    default:
      return state;
  }
};

export default uiReducer;
