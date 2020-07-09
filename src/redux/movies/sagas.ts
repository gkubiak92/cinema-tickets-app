import { takeLatest, put, all, call } from "redux-saga/effects";
import { MovieActionNames } from "./types";
import { fetchMoviesFailure, fetchMoviesSuccess } from "./actions";
import { firestore, convertSnapshotToArray } from "firebase/firebase.utils";
import { FirestoreCollections } from "firebase/types";
import { spinnerStart, spinnerFinish } from "redux/ui/actions";

export function* fetchMoviesStart() {
  yield takeLatest(MovieActionNames.FETCH_MOVIES_START, fetchMoviesAsync);
}

export function* fetchMoviesAsync() {
  try {
    yield put(spinnerStart());
    const collectionRef = firestore.collection(FirestoreCollections.MOVIES);
    const snapshot = yield collectionRef.get();
    const moviesArray = yield call(convertSnapshotToArray, snapshot);
    yield put(fetchMoviesSuccess(moviesArray));
    yield put(spinnerFinish());
  } catch (error) {
    yield put(fetchMoviesFailure(error));
    yield put(spinnerFinish());
  }
}

export function* moviesSagas() {
  yield all([call(fetchMoviesStart)]);
}
