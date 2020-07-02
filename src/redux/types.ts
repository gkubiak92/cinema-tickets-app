import { IMoviesState } from "./movies/types";
import { IUIState } from "./ui/types";
import { IReservationState } from "./reservation/types";

export interface IRootState {
  movies: IMoviesState;
  ui: IUIState;
  reservation: IReservationState;
}
