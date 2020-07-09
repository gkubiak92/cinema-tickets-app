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
import { spinnerStart, spinnerFinish } from "redux/ui/actions";

function* fetchScreeningsStart() {
  yield takeLatest(
    ScreeningsActionNames.FETCH_MOVIE_SCREENINGS_START,
    fetchScreeningsAsync
  );
}

function* fetchScreeningsAsync({ payload }: IFetchMovieScreeningsStartAction) {
  try {
    yield put(spinnerStart());
    const screeningsRef = firestore.collection(FirestoreCollections.SCREENINGS);
    const snapshot = yield screeningsRef.where("movieId", "==", payload).get();
    const screeningsArray = convertSnapshotToArray(snapshot);
    yield put(fetchScreeningsSuccess(screeningsArray));
    yield put(spinnerFinish());
  } catch (error) {
    yield put(fetchScreeningsFailure(error));
    yield put(spinnerFinish());
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
    yield put(spinnerStart());
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
    yield put(spinnerFinish());
  } catch (error) {
    yield put(addBookedSeatsToScreeningFailure(error));
    yield put(spinnerFinish());
  }
}

export function* screeningsSagas() {
  yield all([call(fetchScreeningsStart), call(addBookedSeatsToScreeningStart)]);
}
