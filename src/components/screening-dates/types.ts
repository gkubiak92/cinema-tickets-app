import {
  resetSelectedSeats,
  fetchSeatArrangementStart,
} from "redux/reservation/actions";
import { IMovie, IScreeningDate } from "api/types";

export interface IscreeningDatesContainerMappedState {
  dates: IScreeningDate[];
}

export interface IScreeningDatesContainerMappedDispatch {
  resetSelectedSeats: typeof resetSelectedSeats;
  fetchSeatArrangementStart: typeof fetchSeatArrangementStart;
}

export type IScreeningDatesContainerProps = {
  movie: IMovie;
};
