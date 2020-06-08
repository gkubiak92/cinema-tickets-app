import { IMovie } from "components/movie-listitem/types";

export interface ISeatReservationPageMatchParams {
  movieId: string;
}

export interface ISeatReservationPageMapStateProps {
  date: string;
  hour: string;
  movie: IMovie | null;
  selectedSeatsCount: number;
  ticketPrice: number | null;
}

export interface ISeatReservationPageMapDispatchProps {
  setReservationMovieId: (movieId: string) => void;
}
