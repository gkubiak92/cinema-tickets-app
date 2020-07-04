import { takeLatest, put, all, call, select } from "redux-saga/effects";
import { ReservationActionNames } from "./types";
import { fetchHalLDataFailure, fetchHallDataSuccess } from "./actions";
import { firestore } from "firebase/firebase.utils";
import { FirestoreCollections } from "firebase/types";
import { selectReservationHallId } from "./selectors";

function* fetchHallDataStart() {
  yield takeLatest(
    ReservationActionNames.FETCH_HALL_DATA_START,
    fetchHallDataAsync
  );
}

function* fetchHallDataAsync() {
  try {
    const hallId = yield select(selectReservationHallId);
    const hallDataRef = firestore
      .collection(FirestoreCollections.HALLS)
      .doc(hallId);
    const snapshot = yield hallDataRef.get();
    yield put(fetchHallDataSuccess(snapshot.data()));
  } catch (error) {
    yield put(fetchHalLDataFailure(error));
  }
}

export function* reservationSagas() {
  yield all([call(fetchHallDataStart)]);
}
