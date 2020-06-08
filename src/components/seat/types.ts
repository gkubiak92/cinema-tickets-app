export type ISeat = {
  id: string;
  row: string;
  seatNumber: number;
};

export interface ISeatDispatchProps {
  addSeatToReservation: (seat: ISeat) => void;
  removeSeatFromReservation: (seat: ISeat) => void;
}

export type SeatType = "disabled" | "booked" | "";

export interface ISeatProps {
  type: SeatType;
  row: string;
  seatNumber: number;
  isSelected?: boolean;
  isLegend?: boolean;
}
