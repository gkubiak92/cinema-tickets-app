import { MovieActionNames, MovieActionTypes } from "./movies.types";
import { movies } from "../../data/dump-data";

const INITIAL_STATE = {
  movies: movies,
  isFetching: false,
  error: "",
};

const moviesReducer = (state = INITIAL_STATE, action: MovieActionTypes) => {
  switch (action.type) {
    case MovieActionNames.FETCH_MOVIES_START:
      return {
        ...state,
        isFetching: true,
      };
    case MovieActionNames.FETCH_MOVIES_SUCCESS:
      return {
        ...state,
        movies: action.payload,
        isFetching: false,
        error: "",
      };
    case MovieActionNames.FETCH_MOVIES_FAILURE:
      return {
        ...state,
        isFetching: false,
        error: action.payload,
      };
    default:
      break;
  }
};

export default moviesReducer;
