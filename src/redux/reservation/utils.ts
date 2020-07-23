import { ISeat } from "pages/seat-reservation/components/Seat/types";

export const addSeatToReservation = (
  selectedSeats: ISeat[],
  payload: ISeat
) => {
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
  payload: ISeat
) => selectedSeats.filter((seat) => seat.id !== payload.id);
