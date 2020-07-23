import {
  setReservationHallId,
  setReservationHour,
  setReservationScreeningId,
} from "redux/reservation/actions";
import { IScreeningDate } from "api/types";

export interface IScreeningHoursMappedDispatch {
  setReservationHour: typeof setReservationHour;
  setReservationHallId: typeof setReservationHallId;
  setReservationScreeningId: typeof setReservationScreeningId;
}

export type IScreeningHoursProps = {
  screeningDate: IScreeningDate;
  activeHourIndex: number;
  onClick: Function;
} & IScreeningHoursMappedDispatch;
