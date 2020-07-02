import { resetSelectedSeats } from "redux/reservation/actions";
import { IMovie, IScreeningDate } from "api/types";

export interface IscreeningDatesContainerMappedState {
  dates: IScreeningDate[];
}

export interface IScreeningDatesContainerMappedDispatch {
  resetSelectedSeats: typeof resetSelectedSeats;
}

export type IScreeningDatesContainerProps = {
  movie: IMovie;
};
