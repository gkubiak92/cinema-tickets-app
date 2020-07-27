import {
  resetSelectedSeats,
  fetchHallDataStart,
  setReservationMovieId,
} from "redux/reservation/actions";
import { IScreeningDate } from "api/types";

export interface IMappedState {
  dates: IScreeningDate[];
  screeningId: string;
}

export interface IMappedActions {
  resetSelectedSeats: typeof resetSelectedSeats;
  fetchHallDataStart: typeof fetchHallDataStart;
  setReservationMovieId: typeof setReservationMovieId;
}

export type IProps = {
  movieId: string;
};

export type ActiveDate = {
  date: string,
  index: null | number;
}

export type ActiveHour = {
  hour: string,
  index: null | number;
}
