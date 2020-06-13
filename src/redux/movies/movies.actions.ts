import { MovieActionNames } from "./movies.types";
import { IMoviesList } from "../../components/movies-list/types";
import { IMovie } from "components/movie-listitem/types";

export const fetchMoviesStart = () => ({
  type: MovieActionNames.FETCH_MOVIES_START,
  payload: null,
});

export const fetchMoviesSuccess = (movies: IMoviesList) => ({
  type: MovieActionNames.FETCH_MOVIES_SUCCESS,
  payload: movies,
});

export const fetchMoviesFailure = (error: string) => ({
  type: MovieActionNames.FETCH_MOVIES_FAILURE,
  payload: error,
});

export const fetchMovieBookedSeatsStart = (movieId: string) => ({
  type: MovieActionNames.FETCH_MOVIE_BOOKED_SEATS_START,
  payload: movieId
})

export const fetchMovieBookedSeatsSuccess = (movie: IMovie) => ({
  type: MovieActionNames.FETCH_MOVIE_BOOKED_SEATS_SUCCESS,
  payload: movie
})

export const fetchMovieBookedSeatsFailure = (error: string) => ({
  type: MovieActionNames.FETCH_MOVIE_BOOKED_SEATS_FAILURE,
  payload: error,
})