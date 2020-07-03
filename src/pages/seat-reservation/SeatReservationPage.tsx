import React, { useEffect } from "react";
import { connect } from "react-redux";
import "./styles.scss";
import { IRootState } from "redux/types";
import { createStructuredSelector } from "reselect";
import {
  ISeatReservationPageMapStateProps,
  ISeatReservationPageMatchParams,
  ISeatReservationPageMapDispatchProps,
} from "./types";
import {
  selectReservationDate,
  selectReservationHour,
  selectSelectedSeatsCount,
} from "redux/reservation/selectors";
import { selectMovie, selectMovieTicketPrice } from "redux/movies/selectors";
import SeatingPlan from "components/SeatingPlan/SeatingPlan";
import CustomButton from "components/CustomButton/CustomButton";
import { RouteComponentProps } from "react-router-dom";
import { setReservationMovieId } from "redux/reservation/actions";
import SeatingPlanLegend from "components/SeatingPlanLegend/SeatingPlanLegend";
import MovieInfo from "components/MovieInfo/MovieInfo";
import { fetchMovieBookedSeatsStart } from "redux/movies/actions";

const SeatReservationPage = ({
  date,
  hour,
  movie,
  selectedSeatsCount,
  setReservationMovieId,
  fetchMovieBookedSeatsStart,
  ticketPrice,
  match,
}: RouteComponentProps<ISeatReservationPageMatchParams> &
  ISeatReservationPageMapStateProps &
  ISeatReservationPageMapDispatchProps) => {
  useEffect(() => {
    setReservationMovieId(match.params.movieId);
  }, [setReservationMovieId, match.params.movieId]);

  useEffect(() => {
    fetchMovieBookedSeatsStart(match.params.movieId);
  }, [fetchMovieBookedSeatsStart, match.params.movieId]);

  const total = selectedSeatsCount
    ? `${(selectedSeatsCount * ticketPrice!).toFixed(2)}$`
    : "";

  return (
    <div className="seat-reservation">
      <MovieInfo movie={movie} date={date} hour={hour} />
      <SeatingPlan />
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

const mapStateToProps = createStructuredSelector<
  IRootState,
  RouteComponentProps<ISeatReservationPageMatchParams>,
  ISeatReservationPageMapStateProps
>({
  date: selectReservationDate,
  hour: selectReservationHour,
  movie: (state, ownProps) => selectMovie(ownProps.match.params.movieId)(state),
  selectedSeatsCount: selectSelectedSeatsCount,
  ticketPrice: (state, ownProps) =>
    selectMovieTicketPrice(ownProps.match.params.movieId)(state),
});

const mapDispatchToProps = {
  setReservationMovieId,
  fetchMovieBookedSeatsStart,
};

export default connect(
  mapStateToProps,
  mapDispatchToProps
)(SeatReservationPage);
