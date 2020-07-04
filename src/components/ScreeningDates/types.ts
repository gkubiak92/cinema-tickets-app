import {
  resetSelectedSeats,
  fetchHallDataStart,
} from "redux/reservation/actions";
import { IMovie, IScreeningDate } from "api/types";

export interface IMappedState {
  dates: IScreeningDate[];
}

export interface IMappedActions {
  resetSelectedSeats: typeof resetSelectedSeats;
  fetchSeatArrangementStart: typeof fetchHallDataStart;
}

export type IProps = {
  movie: IMovie;
};
