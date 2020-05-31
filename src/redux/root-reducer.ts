import { combineReducers } from "redux";
import moviesReducer from "./movies/movies.reducer";
import uiReducer from "./ui/ui.reducer";

const rootReducer = combineReducers({
  movies: moviesReducer,
  ui: uiReducer,
});

export default rootReducer;
