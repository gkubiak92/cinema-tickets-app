import { combineReducers } from "redux";

import moviesReducer from "./movies/movies.reducer";

const rootReducer = combineReducers({
  movies: moviesReducer,
});

export default rootReducer;
