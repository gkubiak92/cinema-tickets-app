import { ISeat } from "components/seat/types";
import { ISeatArrangement } from "api/types";

export interface ISeatingPlanMappedState {
  selectedSeats: ISeat[];
  seatArrangement: ISeatArrangement;
}
