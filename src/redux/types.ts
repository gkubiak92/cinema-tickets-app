import { IMoviesState } from "./movies/movies.types";
import { IUIState } from "./ui/ui.types";
import { IReservationState } from "./reservation/reservation.types";

export interface IRootState {
  movies: IMoviesState;
  ui: IUIState;
  reservation: IReservationState;
}
