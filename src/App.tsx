import React from "react";
import { Switch, Route } from "react-router-dom";
import "./App.scss";
import "./styles/index.scss";
import { library } from "@fortawesome/fontawesome-svg-core";
import {
  faBars,
  faSearch,
  faTimes,
  faStar,
  faStarHalf,
  faFilm,
  faHome,
} from "@fortawesome/free-solid-svg-icons";
import { faStar as starEmpty } from "@fortawesome/free-regular-svg-icons";
import Header from "components/UI/Header/Header";
import HomePage from "pages/home/HomePage";
import MoviePage from "pages/movie/MoviePage";
import MoviesPage from "pages/movies/MoviesPage";
import SeatReservationPage from "pages/seat-reservation/SeatReservationPage";
import PaymentPage from "pages/payment/PaymentPage";
import GlobalSpinner from "components/GlobalSpinner/GlobalSpinner";

library.add(
  faBars,
  faSearch,
  faTimes,
  faStar,
  faStarHalf,
  starEmpty,
  faFilm,
  faHome,
);

function App() {
  return (
    <div className="App">
      <Header />
      <GlobalSpinner />
      <Switch>
        <Route exact path="/" component={HomePage} />
        <Route path="/movie/:movieId" component={MoviePage} />
        <Route path="/movies" component={MoviesPage} />
        <Route
          path="/seat-reservation/:screeningId"
          component={SeatReservationPage}
        />
        <Route path="/payment" component={PaymentPage} />
      </Switch>
    </div>
  );
}

export default App;
