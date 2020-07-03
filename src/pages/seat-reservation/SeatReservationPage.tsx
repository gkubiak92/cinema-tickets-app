import React, { useEffect } from "react";
import { connect } from "react-redux";
import "./styles.scss";
import { IRootState } from "redux/types";
import { IMappedState, IOwnProps, IMappedActions } from "./types";
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

const SeatReservationPage = ({
  date,
  hour,
  movie,
  selectedSeatsCount,
  setReservationMovieId,
  ticketPrice,
  match,
}: RouteComponentProps<IOwnProps> & IMappedState & IMappedActions) => {
  const {
    params: { movieId },
  } = match;
  useEffect(() => {
    setReservationMovieId(movieId);
  }, [setReservationMovieId, movieId]);

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

const mapStateToProps = (
  state: IRootState,
  ownProps: RouteComponentProps<IOwnProps>
) => ({
  date: selectReservationDate(state),
  hour: selectReservationHour(state),
  movie: selectMovie(ownProps.match.params.movieId)(state),
  selectedSeatsCount: selectSelectedSeatsCount(state),
  ticketPrice: selectMovieTicketPrice(ownProps.match.params.movieId)(state),
});

const mapDispatchToProps = {
  setReservationMovieId,
};

export default connect(
  mapStateToProps,
  mapDispatchToProps
)(SeatReservationPage);
