import {
  IReservationState,
  ReservationActionTypes,
  ReservationActionNames,
} from "./types";
import { addSeatToReservation, removeSeatFromReservation } from "./utils";

const INITIAL_STATE: IReservationState = {
  movieId: "",
  date: "",
  hour: "",
  hallId: "",
  hallData: {
    id: "",
    name: "",
    seatArrangement: {},
  },
  screeningId: "",
  selectedSeats: [],
  paymentSuccess: false,
};

const reservationReducer = (
  state = INITIAL_STATE,
  action: ReservationActionTypes
) => {
  switch (action.type) {
    case ReservationActionNames.SET_RESERVATION_MOVIE_ID:
      return {
        ...state,
        movieId: action.payload,
      };

    case ReservationActionNames.SET_RESERVATION_DATE:
      return {
        ...state,
        date: action.payload,
      };
    case ReservationActionNames.SET_RESERVATION_HOUR:
      return {
        ...state,
        hour: action.payload,
      };
    case ReservationActionNames.SET_RESERVATION_HALL_ID:
      return {
        ...state,
        hallId: action.payload,
      };
    case ReservationActionNames.SET_RESERVATION_SCREENING_ID:
      return {
        ...state,
        screeningId: action.payload,
      };
    case ReservationActionNames.ADD_SEAT_TO_RESERVATION:
      return {
        ...state,
        selectedSeats: addSeatToReservation(
          state.selectedSeats,
          action.payload
        ),
      };
    case ReservationActionNames.REMOVE_SEAT_FROM_RESERVATION:
      return {
        ...state,
        selectedSeats: removeSeatFromReservation(
          state.selectedSeats,
          action.payload
        ),
      };
    case ReservationActionNames.RESET_SELECTED_SEATS:
      return {
        ...state,
        selectedSeats: [],
      };
    case ReservationActionNames.FETCH_HALL_DATA_SUCCESS:
      return {
        ...state,
        hallData: action.payload,
      };
    case ReservationActionNames.ADD_RESERVATION_SUCCESS:
      return {
        ...state,
        paymentSuccess: true,
      };
    case ReservationActionNames.RESET_RESERVATION_DATA:
      return {
        ...INITIAL_STATE,
      };
    default:
      return state;
  }
};

export default reservationReducer;
