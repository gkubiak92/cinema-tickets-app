import { takeLatest, put, all, call } from "redux-saga/effects";
import { MovieActionNames } from "./types";
import { fetchMoviesFailure, fetchMoviesSuccess } from "./actions";
import { firestore, convertSnapshotToArray } from "services/firebase/firebase.utils";
import { FirestoreCollections } from "services/firebase/types";

export function* fetchMoviesStart() {
  yield takeLatest(MovieActionNames.FETCH_MOVIES_START, fetchMoviesAsync);
}

export function* fetchMoviesAsync() {
  try {
    const collectionRef = firestore.collection(FirestoreCollections.MOVIES);
    const snapshot = yield collectionRef.get();
    const moviesArray = yield call(convertSnapshotToArray, snapshot);
    yield put(fetchMoviesSuccess(moviesArray));
  } catch (error) {
    yield put(fetchMoviesFailure(error));
  }
}

export function* moviesSagas() {
  yield all([call(fetchMoviesStart)]);
}
