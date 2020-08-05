import React from "react";
import { Switch, Route } from "react-router-dom";
import "./App.scss";
import "./styles/index.scss";
import Header from "components/UI/Header/Header";
import HomePage from "pages/home/HomePage";
import MoviePage from "pages/movie/MoviePage";
import MoviesPage from "pages/movies/MoviesPage";
import SeatReservationPage from "pages/seat-reservation/SeatReservationPage";
import PaymentPage from "pages/payment/PaymentPage";
import GlobalSpinner from "components/GlobalSpinner/GlobalSpinner";
import { IRootState } from "redux/types";
import { connect } from "react-redux";
import { MappedState } from "types";


function App({ loading }: MappedState) {
  return (
    <div className="App">
      <Header />
      {loading && <GlobalSpinner />}
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

const mapStateToProps = (state: IRootState) => ({
  loading: state.ui.spinner,
})

export default connect(mapStateToProps)(App);
