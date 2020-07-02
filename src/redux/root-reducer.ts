import { combineReducers } from "redux";
import { persistReducer } from "redux-persist";
import storage from "redux-persist/lib/storage";
import moviesReducer from "./movies/reducer";
import uiReducer from "./ui/reducer";
import reservationReducer from "./reservation/reducer";
import screeningsReducer from "./screenings/reducer";

const rootReducer = combineReducers({
  movies: moviesReducer,
  ui: uiReducer,
  reservation: reservationReducer,
  screenings: screeningsReducer,
});

const persistConfig = {
  key: "root",
  storage,
};

export default persistReducer(persistConfig, rootReducer);
