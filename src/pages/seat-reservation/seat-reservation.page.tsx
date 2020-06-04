import React from "react";
import { connect } from "react-redux";
import { IRootState } from "redux/types";
import { createStructuredSelector } from "reselect";
import {
  ISeatReservationPageProps,
  ISeatReservationPageMapStateProps,
} from "./types";
import {
  selectReservationDate,
  selectReservationHour,
} from "redux/reservation/reservation.selectors";
import { selectMovie } from "redux/movies/movies.selectors";

const SeatReservationPage = ({
  match,
  date,
  hour,
  movie,
}: ISeatReservationPageProps) => {
  return (
    <div className="seat-reservation">
      <h1>Choose seat</h1>
      <p>Movie: {movie?.title}</p>
      <p>Date: {date}</p>
      <p>Hour: {hour}</p>
    </div>
  );
};

const mapStateToProps = createStructuredSelector<
  IRootState,
  ISeatReservationPageProps,
  ISeatReservationPageMapStateProps
>({
  date: selectReservationDate,
  hour: selectReservationHour,
  movie: (state, ownProps) => selectMovie(ownProps.match.params.movieId)(state),
});

export default connect(mapStateToProps)(SeatReservationPage);
