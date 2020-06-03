export const ReservationActionNames = {
  SET_RESERVATION_MOVIE_ID: "SET_RESERVATION_MOVIE_ID",
  SET_RESERVATION_DATE: "SET_RESERVATION_DATE",
  SET_RESERVATION_HOUR: "SET_RESERVATION_HOUR",
};

interface ISetReservationMovieId {
  type: typeof ReservationActionNames.SET_RESERVATION_MOVIE_ID;
  payload: string;
}

interface ISetReservationDate {
  type: typeof ReservationActionNames.SET_RESERVATION_DATE;
  payload: string;
}

interface ISetReservationHour {
  type: typeof ReservationActionNames.SET_RESERVATION_HOUR;
  payload: string;
}

export type ReservationActionTypes =
  | ISetReservationDate
  | ISetReservationHour
  | ISetReservationMovieId;

export interface IReservationState {
  movieId: string;
  date: string;
  hour: string;
}
