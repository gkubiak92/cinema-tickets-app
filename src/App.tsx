import React from "react";
import { Switch, Route } from "react-router-dom";
import "./App.scss";
import { library } from "@fortawesome/fontawesome-svg-core";
import {
  faBars,
  faSearch,
  faTimes,
  faStar,
  faStarHalf,
} from "@fortawesome/free-solid-svg-icons";
import { faStar as starEmpty } from "@fortawesome/free-regular-svg-icons";
import Header from "./components/header/header.component";
import HomePage from "./pages/home/homepage.component";
import MoviePage from "./pages/movie/moviepage.component";
import MoviesPage from "./pages/movies/moviespage.component";

library.add(faBars, faSearch, faTimes, faStar, faStarHalf, starEmpty);

function App() {
  return (
    <div className="App">
      <Header />
      <Switch>
        <Route exact path="/" component={HomePage} />
        <Route path="/movie/:movieId" component={MoviePage} />
        <Route path="/movies" component={MoviesPage} />
      </Switch>
    </div>
  );
}

export default App;
