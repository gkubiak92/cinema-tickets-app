import React from "react";
import { connect } from "react-redux";
import { IRootState } from "redux/types";
import { createStructuredSelector } from "reselect";
import { ISeatReservationPageProps } from "./types";
import {
  selectReservationMovieId,
  selectReservationDate,
  selectReservationHour,
} from "redux/reservation/reservation.selectors";

const SeatReservationPage = ({
  movieId,
  date,
  hour,
}: ISeatReservationPageProps) => (
  <div className="seat-reservation">
    <h1>Choose seat</h1>
    <p>{movieId}</p>
    <p>{date}</p>
    <p>{hour}</p>
  </div>
);

const mapStateToProps = createStructuredSelector<
  IRootState,
  ISeatReservationPageProps
>({
  movieId: selectReservationMovieId,
  date: selectReservationDate,
  hour: selectReservationHour,
});

export default connect(mapStateToProps)(SeatReservationPage);
