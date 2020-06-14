import { takeLatest, put, all, call, select } from "redux-saga/effects";
import { MovieActionNames, IFetchMovieBookedSeatsStart } from "./movies.types";
import {
  fetchMoviesFailure,
  fetchMoviesSuccess,
  fetchMovieBookedSeatsFailure,
} from "./movies.actions";
import {
  firestore,
  convertMoviesSnapshotToMoviesArray,
} from "firebase/firebase.utils";
import { selectReservationHallId } from "redux/reservation/reservation.selectors";

export function* fetchMoviesStart() {
  yield takeLatest(MovieActionNames.FETCH_MOVIES_START, fetchMoviesAsync);
}

export function* fetchMoviesAsync() {
  try {
    const collectionRef = firestore.collection("movies");
    const snapshot = yield collectionRef.get();
    const moviesArray = yield call(
      convertMoviesSnapshotToMoviesArray,
      snapshot
    );
    yield put(fetchMoviesSuccess(moviesArray));
  } catch (error) {
    yield put(fetchMoviesFailure(error));
  }
}

export function* fetchMovieBookedSeatsStart() {
  yield takeLatest(
    MovieActionNames.FETCH_MOVIE_BOOKED_SEATS_START,
    fetchMovieBookedSeats
  );
}

export function* fetchMovieBookedSeats(action: IFetchMovieBookedSeatsStart) {
  try {
    const movieDocRef = firestore.doc(`movies/${action.payload}`);
    const movieSnapshot = yield movieDocRef.get();
    const reservationHallId = yield select(selectReservationHallId);
    console.log(reservationHallId);
    console.log(movieSnapshot.data());
  } catch (error) {
    yield put(fetchMovieBookedSeatsFailure(error));
  }
}

export function* moviesSagas() {
  yield all([call(fetchMoviesStart), call(fetchMovieBookedSeatsStart)]);
}
