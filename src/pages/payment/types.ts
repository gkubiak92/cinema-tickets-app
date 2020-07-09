import { IMovie } from "api/types";
import { IReservationState } from "redux/reservation/types";

export type IMappedState = {
  paymentSuccess: boolean;
  reservation: IReservationState;
  movie: IMovie | null;
};
