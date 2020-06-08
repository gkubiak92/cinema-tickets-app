import { combineReducers } from "redux";
import { persistReducer } from "redux-persist";
import storage from "redux-persist/lib/storage";
import moviesReducer from "./movies/movies.reducer";
import uiReducer from "./ui/ui.reducer";
import reservationReducer from "./reservation/reservation.reducer";

const rootReducer = combineReducers({
  movies: moviesReducer,
  ui: uiReducer,
  reservation: reservationReducer,
});

const persistConfig = {
  key: "root",
  storage,
};

export default persistReducer(persistConfig, rootReducer);
