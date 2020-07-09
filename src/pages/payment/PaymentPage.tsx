import React from "react";
import "./styles.scss";
import MovieInfo from "components/MovieInfo/MovieInfo";
import { connect } from "react-redux";
import {
  selectReservation,
  selectReservationMovieId,
} from "redux/reservation/selectors";
import { selectMovie } from "redux/movies/selectors";
import PaymentForm from "pages/payment/PaymentForm/PaymentForm";
import LoaderSpinner from "components/LoaderSpinner/LoaderSpinner";
import PaymentSuccess from "./PaymentSuccess/PaymentSuccess";
import { IRootState } from "redux/types";
import { IMappedState } from "./types";

const PaymentPage = ({ paymentSuccess, movie, reservation }: IMappedState) => {
  const total = (movie!.ticketPrice * reservation.selectedSeats.length).toFixed(
    2
  );

  return (
    <div className="payment-page">
      {movie ? (
        <MovieInfo
          movie={movie}
          date={reservation.date}
          hour={reservation.hour}
        />
      ) : (
        <LoaderSpinner />
      )}

      <PaymentForm />
      <h2>Selected seats:</h2>
      <div className="selected-tickets">
        {reservation.selectedSeats.map((seat, index) => (
          <div key={index} className="ticket">
            {seat.id}
          </div>
        ))}
      </div>
      <div className="total">Total: {total} $</div>
      {paymentSuccess && <PaymentSuccess />}
    </div>
  );
};

const mapStateToProps = (state: IRootState) => ({
  reservation: selectReservation(state),
  paymentSuccess: state.reservation.paymentSuccess,
  movie: selectMovie(selectReservationMovieId(state))(state),
});

export default connect(mapStateToProps)(PaymentPage);
