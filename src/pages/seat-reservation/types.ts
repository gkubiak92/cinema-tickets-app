import { IMovie } from "api/types";

export interface IRouteProps {
  screeningId: string;
}

export interface IMappedState {
  date: string;
  hour: string;
  movie: IMovie | null;
  selectedSeatsCount: number;
  ticketPrice: number | null;
}
