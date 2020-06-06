import React, { useEffect } from "react";
import { connect } from "react-redux";
import "./seat-reservation.styles.scss";
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
} from "redux/reservation/reservation.selectors";
import { selectMovie } from "redux/movies/movies.selectors";
import MovieThumbnail from "components/movie-thumbnail/moviethumbnail.component";
import Seat from "components/seat/seat.component";
import SeatingPlan from "components/seating-plan/seating-plan.component";
import Button from "components/button/button.component";
import { RouteComponentProps } from "react-router-dom";
import { Dispatch } from "redux";
import { ReservationActionTypes } from "redux/reservation/reservation.types";
import { resetSelectedSeats } from "redux/reservation/reservation.actions";
import SeatingPlanLegend from "components/seating-plan-legend/seating-plan-legend.comopnent";

const SeatReservationPage = ({
  date,
  hour,
  movie,
  selectedSeatsCount,
  resetSelectedSeats,
}: RouteComponentProps<ISeatReservationPageMatchParams> &
  ISeatReservationPageMapStateProps &
  ISeatReservationPageMapDispatchProps) => {
  useEffect(() => {
    resetSelectedSeats();
  }, [resetSelectedSeats]);

  return (
    <div className="seat-reservation">
      <div className="movie-info">
        <MovieThumbnail thumbnailUrl={movie!.thumbnailUrl} />
        <div className="movie-details">
          <h1>{movie?.title}</h1>
          <p>{date}</p>
          <p>{hour}</p>
        </div>
      </div>
      <div className="screen" />
      <SeatingPlan />
      <SeatingPlanLegend />
      <Button
        to="/payment"
        type="block"
        disabled={!selectedSeatsCount}
        text={`Pay now ${
          selectedSeatsCount ? `${selectedSeatsCount * 10}$` : ""
        }`}
      ></Button>
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
});

const mapDispatchToProps = (dispatch: Dispatch<ReservationActionTypes>) => ({
  resetSelectedSeats: () => dispatch(resetSelectedSeats()),
});

export default connect(
  mapStateToProps,
  mapDispatchToProps
)(SeatReservationPage);
