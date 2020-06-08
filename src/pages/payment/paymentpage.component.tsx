import React, { useState, FormEvent, ChangeEvent } from "react";
import "./paymentpage.styles.scss";
import MovieInfo from "components/movie-info/movie-info.component";
import { useSelector } from "react-redux";
import { selectReservation } from "redux/reservation/reservation.selectors";
import { selectMovie } from "redux/movies/movies.selectors";
import PaymentForm from "components/payment-form/payment-form.component";

const PaymentPage = () => {
  const reservation = useSelector(selectReservation);
  const movie = useSelector(selectMovie(reservation.movieId));

  const [formData, setFormData] = useState({
    email: "",
    firstName: "",
    lastName: "",
  });

  const handleSubmit = (e: FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    setFormData({ email: "", firstName: "", lastName: "" });
  };
  const handleInputChange = (e: ChangeEvent<HTMLInputElement>) => {
    const { name, value } = e.target as HTMLInputElement;
    setFormData({
      ...formData,
      [name]: value,
    });
  };

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
      <PaymentForm
        formData={formData}
        handleInputChange={handleInputChange}
        handleSubmit={handleSubmit}
      />
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
