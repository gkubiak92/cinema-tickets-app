import { RouteComponentProps } from "react-router-dom";
import { IMovie } from "components/movie-listitem/types";

export interface ISeatReservationPageMatchParams {
  movieId: string;
}

export interface ISeatReservationPageProps
  extends RouteComponentProps<ISeatReservationPageMatchParams> {
  movie: IMovie | null;
  date: string;
  hour: string;
}

export interface ISeatReservationPageMapStateProps {
  date: string;
  hour: string;
  movie: IMovie | null;
}
