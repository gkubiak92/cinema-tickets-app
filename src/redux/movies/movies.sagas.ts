import { takeLatest, put, all, call } from "redux-saga/effects";
import { MovieActionNames } from "./movies.types";
import { fetchMoviesFailure, fetchMoviesSuccess } from "./movies.actions";
import {
  firestore,
  convertMoviesSnapshotToMoviesArray,
} from "firebase/firebase.utils";

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

export function* moviesSagas() {
  yield all([call(fetchMoviesStart)]);
}
