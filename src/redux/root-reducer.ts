import { combineReducers } from "redux";
import moviesReducer from "./movies/movies.reducer";
import uiReducer from "./ui/ui.reducer";
import reservationReducer from "./reservation/reservation.reducer";

const rootReducer = combineReducers({
  movies: moviesReducer,
  ui: uiReducer,
  reservation: reservationReducer,
});

export default rootReducer;
