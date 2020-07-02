import React, { useEffect } from "react";
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
import Header from "./components/header/header.component";
import HomePage from "./pages/home/homepage.component";
import MoviePage from "./pages/movie/moviepage.component";
import MoviesPage from "./pages/movies/moviespage.component";
import SeatReservationPage from "pages/seat-reservation/seat-reservation.page";
import PaymentPage from "pages/payment/paymentpage.component";
import { Dispatch } from "redux";
import { MovieActionTypes } from "redux/movies/types";
import { fetchMoviesStart } from "redux/movies/actions";
import { connect } from "react-redux";
import { IAppMapDispatchProps } from "types";

library.add(
  faBars,
  faSearch,
  faTimes,
  faStar,
  faStarHalf,
  starEmpty,
  faFilm,
  faHome
);

function App({ fetchMoviesStart }: IAppMapDispatchProps) {
  useEffect(() => {
    fetchMoviesStart();
  }, [fetchMoviesStart]);

  return (
    <div className="App">
      <Header />
      <Switch>
        <Route exact path="/" component={HomePage} />
        <Route path="/movie/:movieId" component={MoviePage} />
        <Route path="/movies" component={MoviesPage} />
        <Route
          path="/seat-reservation/:movieId"
          component={SeatReservationPage}
        />
        <Route path="/payment" component={PaymentPage} />
      </Switch>
    </div>
  );
}

const mapDispatchToProps = (dispatch: Dispatch<MovieActionTypes>) => ({
  fetchMoviesStart: () => dispatch(fetchMoviesStart()),
});

export default connect(null, mapDispatchToProps)(App);
