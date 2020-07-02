import { IUIState, UIActionTypes, UIActionNames } from "./types";

const INITIAL_STATE: IUIState = {
  show: false,
};

const uiReducer = (state = INITIAL_STATE, action: UIActionTypes) => {
  switch (action.type) {
    case UIActionNames.TOGGLE_SIDEDRAWER:
      return {
        ...state,
        show: !state.show,
      };

    default:
      return state;
  }
};

export default uiReducer;
