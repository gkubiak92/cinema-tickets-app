import { takeLatest, put, all, call, select } from "redux-saga/effects";
import { ReservationActionNames } from "./types";
import {
  fetchSeatArrangementFailure,
  fetchSeatArrangementSuccess,
} from "./actions";
import { firestore } from "firebase/firebase.utils";
import { FirestoreCollections } from "firebase/types";
import { selectReservationHallId } from "./selectors";

function* fetchSeatArrangementStart() {
  yield takeLatest(
    ReservationActionNames.FETCH_SEAT_ARRANGEMENT_START,
    fetchSeatArrangementAsync
  );
}

function* fetchSeatArrangementAsync() {
  try {
    const hallId = yield select(selectReservationHallId);
    const seatArrangementRef = firestore
      .collection(FirestoreCollections.HALLS)
      .doc(hallId);
    const snapshot = yield seatArrangementRef.get();
    yield put(fetchSeatArrangementSuccess(snapshot.data()));
  } catch (error) {
    yield put(fetchSeatArrangementFailure(error));
  }
}

export function* reservationSagas() {
  yield all([call(fetchSeatArrangementStart)]);
}
