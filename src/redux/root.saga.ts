import { all, call } from "redux-saga/effects";
import { moviesSagas } from "./movies/sagas";
import { screeningsSagas } from "./screenings/sagas";
import { reservationSagas } from "./reservation/sagas";

export default function* rootSaga() {
  yield all([call(moviesSagas), call(screeningsSagas), call(reservationSagas)]);
}
