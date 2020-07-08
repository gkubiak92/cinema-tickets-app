import React from "react";
import "./styles.scss";
import MovieInfo from "components/MovieInfo/MovieInfo";
import { useSelector } from "react-redux";
import { selectReservation } from "redux/reservation/selectors";
import { selectMovie } from "redux/movies/selectors";
import PaymentForm from "pages/payment/PaymentForm/PaymentForm";
import LoaderSpinner from "components/LoaderSpinner/LoaderSpinner";

const PaymentPage = () => {
  const reservation = useSelector(selectReservation);
  const movie = useSelector(selectMovie(reservation.movieId));
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
    </div>
  );
};
export default PaymentPage;
