import { all, takeEvery, put, call } from "redux-saga/effects";
import { spinnerStart, spinnerFinish } from "./actions";
import { MovieActionNames } from "redux/movies/types";
import { ReservationActionNames } from "redux/reservation/types";
import { ScreeningsActionNames } from "redux/screenings/types";

function* startSpinnerListeners() {
  yield takeEvery(
    [
      MovieActionNames.FETCH_MOVIES_START,
      ReservationActionNames.FETCH_HALL_DATA_START,
      ReservationActionNames.ADD_RESERVATION_START,
      ScreeningsActionNames.FETCH_MOVIE_SCREENINGS_START,
      ScreeningsActionNames.ADD_BOOKED_SEATS_TO_SCREENING_START,
    ],
    startGlobalSpinner
  );
}

function* finishSpinnerListeners() {
  yield takeEvery(
    [
      MovieActionNames.FETCH_MOVIES_SUCCESS,
      MovieActionNames.FETCH_MOVIES_FAILURE,
      ReservationActionNames.FETCH_HALL_DATA_SUCCESS,
      ReservationActionNames.FETCH_HALL_DATA_FAILURE,
      ScreeningsActionNames.FETCH_MOVIE_SCREENINGS_SUCCESS,
      ScreeningsActionNames.FETCH_MOVIE_SCREENINGS_FAILURE,
      ScreeningsActionNames.ADD_BOOKED_SEATS_TO_SCREENING_SUCCESS,
      ScreeningsActionNames.ADD_BOOKED_SEATS_TO_SCREENING_FAILURE,
    ],
    finishGlobalSpinner
  );
}

function* startGlobalSpinner() {
  yield put(spinnerStart());
}

function* finishGlobalSpinner() {
  yield put(spinnerFinish());
}

export function* uiSagas() {
  yield all([call(startSpinnerListeners), call(finishSpinnerListeners)]);
}
