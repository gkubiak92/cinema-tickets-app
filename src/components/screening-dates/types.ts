import { IMovie } from "components/movie-listitem/types";
import {
  setReservationHallId,
  setReservationHour,
} from "redux/reservation/actions";

export interface IScreeningDate {
  date: string;
  hoursAndHalls: IHourAndHall[];
}

export interface IHourAndHall {
  hour: string;
  hallId: string;
}

export interface IScreeningDatesContainerProps {
  movie: IMovie;
}

export interface IscreeningDatesContainerMapStateProps {
  screeningDates: IScreeningDate[] | null;
}

export interface IScreeningDatesContainerDispatchProps {
  resetSelectedSeats: () => void;
  setReservationHallId: typeof setReservationHallId;
}

export interface IScreeningDatesProps {
  screeningDates: IScreeningDate[];
  activeDateIndex: number;
  onClick: Function;
  setReservationDate: (date: string) => void;
}

export interface IScreeningHoursProps {
  screeningDate: IScreeningDate;
  activeHourIndex: number;
  onClick: Function;
  setReservationHour: typeof setReservationHour;
}
