import {
  IScreeningsState,
  ScreeningsActionTypes,
  ScreeningsActionNames,
} from "./types";
import { convertScreeningsCollection } from "./utils";

const INITIAL_STATE: IScreeningsState = {
  screenings: [],
  screeningDates: {},
  isFetching: false,
  error: "",
};

const screeningsReducer = (
  state = INITIAL_STATE,
  action: ScreeningsActionTypes
) => {
  switch (action.type) {
    case ScreeningsActionNames.FETCH_SCREENINGS_START:
      return {
        ...state,
        isFetching: true,
        error: "",
      };
    case ScreeningsActionNames.FETCH_SCREENINGS_SUCCESS:
      return {
        ...state,
        screenings: action.payload,
        screeningDates: convertScreeningsCollection(action.payload),
        isFetching: false,
        error: "",
      };
    case ScreeningsActionNames.FETCH_SCREENINGS_FAILURE:
      return {
        ...state,
        isFetching: false,
        error: action.payload,
      };
    default:
      return {
        ...state,
      };
  }
};

export default screeningsReducer;
