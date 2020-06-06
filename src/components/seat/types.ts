export type ISeat = {
  id: string;
  row: string;
  seatNumber: number;
};

export interface ISeatDispatchProps {
  addSeatToReservation: (seat: ISeat) => void;
  removeSeatFromReservation: (seat: ISeat) => void;
}

export interface ISeatProps {
  type: "disabled" | "booked" | "selected" | "";
  row: string;
  seatNumber: number;
  isLegend?: boolean;
}
