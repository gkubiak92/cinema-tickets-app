import { IMovie } from "api/types";
import { setReservationMovieId } from "redux/reservation/actions";

export interface IOwnProps {
  movieId: string;
}

export interface IMappedState {
  date: string;
  hour: string;
  movie: IMovie | null;
  selectedSeatsCount: number;
  ticketPrice: number | null;
}

export interface IMappedActions {
  setReservationMovieId: typeof setReservationMovieId;
}
