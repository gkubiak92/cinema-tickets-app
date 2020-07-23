import { ISeat } from "pages/seat-reservation/components/Seat/types";
import { ISeatArrangement } from "api/types";

export interface IMappedState {
  selectedSeats: ISeat[];
  seatArrangement: ISeatArrangement;
  bookedSeats: string[] | undefined;
}

export type Props = {
  screeningId: string;
};
