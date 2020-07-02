import { takeLatest, put, all, call, select } from "redux-saga/effects";
import { MovieActionNames, IFetchMovieBookedSeatsStart } from "./types";
import {
  fetchMoviesFailure,
  fetchMoviesSuccess,
  fetchMovieBookedSeatsFailure,
} from "./actions";
import { firestore, convertSnapshotToArray } from "firebase/firebase.utils";
import { selectReservationHallId } from "redux/reservation/selectors";

export function* fetchMoviesStart() {
  yield takeLatest(MovieActionNames.FETCH_MOVIES_START, fetchMoviesAsync);
}

export function* fetchMoviesAsync() {
  try {
    const collectionRef = firestore.collection("movies");
    const snapshot = yield collectionRef.get();
    const moviesArray = yield call(convertSnapshotToArray, snapshot);
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
    const reservationHallId = yield select(selectReservationHallId);
    const movieToHallRef = firestore.doc(`moviesToHalls/${reservationHallId}`);
    const movieToHallSnapshot = yield movieToHallRef.get();
    console.log(reservationHallId);
    console.log(movieToHallSnapshot.data());
  } catch (error) {
    yield put(fetchMovieBookedSeatsFailure(error));
  }
}

export function* moviesSagas() {
  yield all([call(fetchMoviesStart), call(fetchMovieBookedSeatsStart)]);
}
