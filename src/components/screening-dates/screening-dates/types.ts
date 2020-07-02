import { IScreeningDate } from "components/movie-listitem/types";

export interface IScreeningDatesProps {
  screeningDates: IScreeningDate[];
  activeDateIndex: number;
  onClick: Function;
  setReservationDate: (date: string) => void;
}
