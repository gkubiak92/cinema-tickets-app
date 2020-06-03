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
import { useParams } from "react-router-dom";

const SeatReservationPage = ({ date, hour }: ISeatReservationPageProps) => {
  const { movieId } = useParams();
  return (
    <div className="seat-reservation">
      <h1>Choose seat</h1>
      <p>{movieId}</p>
      <p>{date}</p>
      <p>{hour}</p>
    </div>
  );
};

const mapStateToProps = createStructuredSelector<
  IRootState,
  ISeatReservationPageMapStateProps
>({
  date: selectReservationDate,
  hour: selectReservationHour,
});

export default connect(mapStateToProps)(SeatReservationPage);
