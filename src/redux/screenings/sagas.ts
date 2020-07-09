import { takeLatest, put, all, call } from "redux-saga/effects";
import {
  ScreeningsActionNames,
  IFetchMovieScreeningsStartAction,
  IAddBookedSeatsToScreeningStartAction,
} from "./types";
import {
  fetchScreeningsFailure,
  fetchScreeningsSuccess,
  addBookedSeatsToScreeningFailure,
  addBookedSeatsToScreeningSuccess,
} from "./actions";
import { firestore, convertSnapshotToArray } from "firebase/firebase.utils";
import { FirestoreCollections } from "firebase/types";
import firebase from "firebase";

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

function* addBookedSeatsToScreeningStart() {
  yield takeLatest(
    ScreeningsActionNames.ADD_BOOKED_SEATS_TO_SCREENING_START,
    addBookedSeatsToScreeningAsync
  );
}

function* addBookedSeatsToScreeningAsync({
  payload,
}: IAddBookedSeatsToScreeningStartAction) {
  try {
    const screeningRef = firestore
      .collection(FirestoreCollections.SCREENINGS)
      .doc(payload.screeningId);
    yield screeningRef.update({
      bookedSeats: firebase.firestore.FieldValue.arrayUnion(
        ...payload.bookedSeats
      ),
    });
    yield put(
      addBookedSeatsToScreeningSuccess(
        "Successfully added booked seats to screening"
      )
    );
  } catch (error) {
    yield put(addBookedSeatsToScreeningFailure(error));
  }
}

export function* screeningsSagas() {
  yield all([call(fetchScreeningsStart), call(addBookedSeatsToScreeningStart)]);
}
