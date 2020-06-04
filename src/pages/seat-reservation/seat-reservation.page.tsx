import React from "react";
import { connect } from "react-redux";
import "./seat-reservation.styles.scss";
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
import MovieThumbnail from "components/movie-thumbnail/moviethumbnail.component";
import Seat from "components/seat/seat.component";
import SeatingPlan from "components/seating-plan/seating-plan.component";

const SeatReservationPage = ({
  date,
  hour,
  movie,
}: ISeatReservationPageProps) => {
  return (
    <div className="seat-reservation">
      <div className="movie-info">
        <MovieThumbnail thumbnailUrl={movie!.thumbnailUrl} />
        <div className="movie-details">
          <h1>{movie?.title}</h1>
          <p>Date: {date}</p>
          <p>Hour: {hour}</p>
        </div>
      </div>
      <div className="screen" />
      <div className="legend">
        <Seat type="" row="" seatNumber={-1} />
        <p>available</p>
        <Seat type="booked" row="" seatNumber={-1} />
        <p>booked</p>
        <Seat type="selected" row="" seatNumber={-1} />
        <p>selected</p>
      </div>
      <SeatingPlan />
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
