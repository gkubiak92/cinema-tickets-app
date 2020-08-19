import { MovieActionNames, MovieActionTypes, IMoviesState } from "./types";

const INITIAL_STATE: IMoviesState = {
  movies: [],
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
      return state;
  }
};

export default moviesReducer;
