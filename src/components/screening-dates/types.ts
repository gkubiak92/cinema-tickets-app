import { IMovie } from "components/movie-listitem/types";

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
  setReservationHallId: (hallId: string) => void;
}

export interface IScreeningDatesProps {
  screeningDates?: IScreeningDate[] | null;
  activeDateIndex: number;
  onClick: Function;
  setReservationDate: (date: string) => void;
}

export interface IScreeningHoursProps {
  screeningDate: IScreeningDate;
  activeHourIndex: number;
  onClick: Function;
  setReservationHour: (hour: string) => void;
}
