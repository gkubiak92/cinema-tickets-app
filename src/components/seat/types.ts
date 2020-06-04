export type ISeat = {
  row: string;
  seatNumber: number;
};

export interface ISeatDispatchProps {
  addSeatToReservation: (seat: ISeat) => void;
}

export interface ISeatProps {
  type: "disabled" | "booked" | "selected" | "";
  row: string;
  seatNumber: number;
}
