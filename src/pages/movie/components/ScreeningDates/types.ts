import { IScreeningDate } from "api/types";

export interface IScreeningDatesProps {
  screeningDates: IScreeningDate[];
  activeDateIndex: number | null;
  onClick: Function;
  setReservationDate: (date: string) => void;
}
