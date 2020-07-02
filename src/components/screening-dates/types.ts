import { IMovie } from "components/movie-listitem/types";
import {
  setReservationHallId,
  setReservationHour,
  resetSelectedSeats,
} from "redux/reservation/actions";

export interface IHourAndHall {
  hour: string;
  hallId: string;
}

export interface IScreeningDate {
  date: string;
  hoursAndHalls: IHourAndHall[];
}

export interface IscreeningDatesContainerMappedState {
  dates: IScreeningDate[];
}

export interface IScreeningDatesContainerMappedDispatch {
  resetSelectedSeats: typeof resetSelectedSeats;
}

export type IScreeningDatesContainerProps = {
  movie: IMovie;
};
