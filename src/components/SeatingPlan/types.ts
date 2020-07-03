import { ISeat } from "components/Seat/types";
import { ISeatArrangement } from "api/types";

export interface ISeatingPlanMappedState {
  selectedSeats: ISeat[];
  seatArrangement: ISeatArrangement;
}
