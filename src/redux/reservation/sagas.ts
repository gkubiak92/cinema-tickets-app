import { takeLatest, put, all, call, select } from "redux-saga/effects";
import {
  ReservationActionNames,
  IAddReservationStartAction,
  IReservationState,
} from "./types";
import {
  fetchHalLDataFailure,
  fetchHallDataSuccess,
  addReservationFailure,
  addReservationSuccess,
} from "./actions";
import { firestore } from "firebase/firebase.utils";
import { FirestoreCollections } from "firebase/types";
import { selectReservationHallId, selectReservationData } from "./selectors";
import { IReservation } from "api/types";
import { addBookedSeatsToScreeningStart } from "redux/screenings/actions";
import { spinnerStart, spinnerFinish } from "redux/ui/actions";

function* fetchHallDataStart() {
  yield takeLatest(
    ReservationActionNames.FETCH_HALL_DATA_START,
    fetchHallDataAsync
  );
}

function* fetchHallDataAsync() {
  try {
    yield put(spinnerStart());
    const hallId = yield select(selectReservationHallId);
    const hallDataRef = firestore
      .collection(FirestoreCollections.HALLS)
      .doc(hallId);
    const snapshot = yield hallDataRef.get();
    yield put(fetchHallDataSuccess(snapshot.data()));
    yield put(spinnerFinish());
  } catch (error) {
    yield put(fetchHalLDataFailure(error));
    yield put(spinnerFinish());
  }
}

function* addReservationStart() {
  yield takeLatest(
    ReservationActionNames.ADD_RESERVATION_START,
    addReservationAsync
  );
}

function* addReservationAsync({ payload }: IAddReservationStartAction) {
  const { email, firstName, lastName } = payload;
  try {
    yield put(spinnerStart());
    const reservationRef = firestore
      .collection(FirestoreCollections.RESERVATIONS)
      .doc();
    const reservationData: IReservationState = yield select(
      selectReservationData
    );
    const bookedSeats: string[] = reservationData.selectedSeats.map(
      (seat) => seat.id
    );
    const { screeningId } = reservationData;
    const resToAdd: IReservation = {
      id: "",
      bookedSeats,
      email,
      firstName,
      lastName,
      price: 0,
      screeningId,
    };
    yield reservationRef.set(resToAdd);
    yield put(addBookedSeatsToScreeningStart({ screeningId, bookedSeats }));
    yield put(addReservationSuccess("Succesfully added reservation"));
    yield put(spinnerFinish());
  } catch (error) {
    yield put(addReservationFailure(error));
    yield put(spinnerFinish());
  }
}

export function* reservationSagas() {
  yield all([call(fetchHallDataStart), call(addReservationStart)]);
}
