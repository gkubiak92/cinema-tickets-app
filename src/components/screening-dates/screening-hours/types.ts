import {
  setReservationHallId,
  setReservationHour,
} from "redux/reservation/actions";
import { IScreeningDate } from "components/movie-listitem/types";

export interface IScreeningHoursMappedDispatch {
  setReservationHallId: typeof setReservationHallId;
}

export type IScreeningHoursProps = {
  screeningDate: IScreeningDate;
  activeHourIndex: number;
  onClick: Function;
  setReservationHour: typeof setReservationHour;
} & IScreeningHoursMappedDispatch;
