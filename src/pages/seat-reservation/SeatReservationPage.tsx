import React from "react";
import { connect } from "react-redux";
import "./styles.scss";
import { IRootState } from "redux/types";
import { IMappedState, IRouteProps } from "./types";
import {
  selectReservationDate,
  selectReservationHour,
  selectSelectedSeatsCount,
} from "redux/reservation/selectors";
import { selectMovie, selectMovieTicketPrice } from "redux/movies/selectors";
import SeatingPlan from "pages/seat-reservation/components/SeatingPlan/SeatingPlan";
import CustomButton from "components/CustomButton/CustomButton";
import { RouteComponentProps } from "react-router-dom";
import SeatingPlanLegend from "pages/seat-reservation/components/SeatingPlanLegend/SeatingPlanLegend";
import MovieInfo from "components/MovieInfo/MovieInfo";
import LoaderSpinner from "components/LoaderSpinner/LoaderSpinner";

const SeatReservationPage = ({
  date,
  hour,
  movie,
  selectedSeatsCount,
  ticketPrice,
  match,
}: RouteComponentProps<IRouteProps> & IMappedState) => {
  const {
    params: { screeningId },
  } = match;

  const total = selectedSeatsCount
    ? `${(selectedSeatsCount * ticketPrice!).toFixed(2)}$`
    : "";

  return (
    <div className="seat-reservation">
      {movie ? (
        <MovieInfo movie={movie} date={date} hour={hour} />
      ) : (
        <LoaderSpinner />
      )}
      <SeatingPlan screeningId={screeningId} />
      <SeatingPlanLegend />
      <CustomButton
        type="button"
        to="/payment"
        block
        disabled={!selectedSeatsCount}
      >
        Pay now {total}
      </CustomButton>
    </div>
  );
};

const mapStateToProps = (state: IRootState) => ({
  date: selectReservationDate(state),
  hour: selectReservationHour(state),
  movie: selectMovie(state.reservation.movieId)(state),
  selectedSeatsCount: selectSelectedSeatsCount(state),
  ticketPrice: selectMovieTicketPrice(state.reservation.movieId)(state),
});

export default connect(mapStateToProps)(SeatReservationPage);
