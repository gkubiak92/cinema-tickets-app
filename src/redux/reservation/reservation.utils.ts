import { ISeat } from "components/seat/types";

export const addSeatToReservation = (selectedSeats: ISeat[], payload: any) => {
  const seatReservedAlready = selectedSeats.find(
    (seat) => seat.row === payload.row && seat.seatNumber === payload.seatNumber
  );
  if (seatReservedAlready) {
    return selectedSeats;
  }

  return [...selectedSeats, payload];
};

export const removeSeatFromReservation = (
  selectedSeats: ISeat[],
  payload: any
) => selectedSeats.filter((seat) => seat.id !== payload.id);
