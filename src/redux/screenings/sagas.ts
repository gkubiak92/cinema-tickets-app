import { takeLatest, put, all, call } from "redux-saga/effects";
import {
  ScreeningsActionNames,
  IFetchMovieScreeningsStartAction,
} from "./types";
import { fetchScreeningsFailure, fetchScreeningsSuccess } from "./actions";
import { firestore, convertSnapshotToArray } from "firebase/firebase.utils";
import { FirestoreCollections } from "firebase/types";

function* fetchScreeningsStart() {
  yield takeLatest(
    ScreeningsActionNames.FETCH_MOVIE_SCREENINGS_START,
    fetchScreeningsAsync
  );
}

function* fetchScreeningsAsync({ payload }: IFetchMovieScreeningsStartAction) {
  try {
    const screeningsRef = firestore.collection(FirestoreCollections.SCREENINGS);
    const snapshot = yield screeningsRef.where("movieId", "==", payload).get();
    const screeningsArray = convertSnapshotToArray(snapshot);
    yield put(fetchScreeningsSuccess(screeningsArray));
  } catch (error) {
    yield put(fetchScreeningsFailure(error));
  }
}

export function* screeningsSagas() {
  yield all([call(fetchScreeningsStart)]);
}
