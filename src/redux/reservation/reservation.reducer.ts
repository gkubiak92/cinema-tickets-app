import {
  IReservationState,
  ReservationActionTypes,
  ReservationActionNames,
} from "./reservation.types";

const INITIAL_STATE: IReservationState = {
  movieId: "",
  date: "",
  hour: "",
  selectedSeats: [],
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
    case ReservationActionNames.ADD_SEAT_TO_RESERVATION:
      return {
        ...state,
        selectedSeats: [...state.selectedSeats, action.payload],
      };
    case ReservationActionNames.REMOVE_SEAT_FROM_RESERVATION:
      return {
        ...state,
        selectedSeats: state.selectedSeats.filter(
          (seat) => seat !== action.payload
        ),
      };

    default:
      return state;
  }
};

export default reservationReducer;
