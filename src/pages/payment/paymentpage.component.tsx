import React from "react";
import "./paymentpage.styles.scss";
import MovieInfo from "components/movie-info/movie-info.component";
import { useSelector } from "react-redux";
import { selectReservation } from "redux/reservation/reservation.selectors";
import { selectMovie } from "redux/movies/movies.selectors";
import Button from "components/button/button.component";

const PaymentPage = () => {
  const reservation = useSelector(selectReservation);
  const movie = useSelector(selectMovie(reservation.movieId));

  const handleSubmit = () => {};
  const handleInputChange = () => {};

  return (
    <div className="payment-page">
      <MovieInfo
        movie={movie}
        date={reservation.date}
        hour={reservation.hour}
      />
      <h2>Selected seats</h2>
      <div className="selected-tickets">
        {reservation.selectedSeats.map((seat, index) => (
          <div key={index} className="ticket">
            {seat.id}
          </div>
        ))}
      </div>
      <div className="total">
        Total:{" "}
        {(movie!.ticketPrice * reservation.selectedSeats.length).toFixed(2)} $
      </div>
      <form className="payment-form" onSubmit={handleSubmit}>
        <label htmlFor="email">E-mail</label>
        <input
          type="text"
          name="email"
          id="email"
          onChange={handleInputChange}
        />
        <label htmlFor="firstname">First name</label>
        <input
          type="text"
          name="firstname"
          id="firstname"
          onChange={handleInputChange}
        />
        <label htmlFor="lastname">Last name</label>
        <input
          type="text"
          name="lastname"
          id="lastname"
          onChange={handleInputChange}
        />
      </form>
      <Button onClick={handleSubmit} type="block" text="Confirm payment" />
    </div>
  );
};
export default PaymentPage;
