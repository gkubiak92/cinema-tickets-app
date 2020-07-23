import {
  addSeatToReservation,
  removeSeatFromReservation,
} from "redux/reservation/actions";

export type ISeat = {
  id: string;
  row: string;
  seatNumber: number;
};

export interface IMappedActions {
  addSeatToReservation: typeof addSeatToReservation;
  removeSeatFromReservation: typeof removeSeatFromReservation;
}

export type SeatType = "disabled" | "booked" | "";

export type IProps = {
  type: SeatType;
  row: string;
  seatNumber: number;
  isSelected?: boolean;
  isLegend?: boolean;
} & IMappedActions;
