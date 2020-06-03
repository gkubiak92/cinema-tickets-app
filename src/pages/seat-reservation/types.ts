import { RouteComponentProps } from "react-router-dom";

export interface ISeatReservationPageMatchParams {
  movieId: string;
}

export interface ISeatReservationPageProps {
  movieId: RouteComponentProps<ISeatReservationPageMatchParams>;
  date: string;
  hour: string;
}

export interface ISeatReservationPageMapStateProps {
  date: string;
  hour: string;
}
