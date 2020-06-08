import React from "react";
import "./paymentpage.styles.scss";
import MovieInfo from "components/movie-info/movie-info.component";
import { useSelector } from "react-redux";
import { selectReservation } from "redux/reservation/reservation.selectors";
import { selectMovie } from "redux/movies/movies.selectors";
import PaymentForm from "components/payment-form/payment-form.component";

const PaymentPage = () => {
  const reservation = useSelector(selectReservation);
  const movie = useSelector(selectMovie(reservation.movieId));
  const total = (movie!.ticketPrice * reservation.selectedSeats.length).toFixed(
    2
  );

  return (
    <div className="payment-page">
      <MovieInfo
        movie={movie}
        date={reservation.date}
        hour={reservation.hour}
      />
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
