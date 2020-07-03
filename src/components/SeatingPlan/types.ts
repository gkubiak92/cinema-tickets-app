import { ISeat } from "components/Seat/types";
import { ISeatArrangement } from "api/types";

export interface IMappedState {
  selectedSeats: ISeat[];
  seatArrangement: ISeatArrangement;
}
