import { createSelector } from "reselect";
import { IRootState } from "../types";

export const selectMovies = (state: IRootState) => state.movies;

export const selectAllMovies = createSelector(
  selectMovies,
  ({ movies }) => movies
);

export const selectNewMovies = createSelector(selectMovies, ({ movies }) =>
  movies.filter((movie) => movie.isNew)
);

export const selectPopularMovies = createSelector(selectMovies, ({ movies }) =>
  movies.filter((movie) => movie.isPopular)
);

export const selectUpcomingMovies = createSelector(selectMovies, ({ movies }) =>
  movies.filter((movie) => movie.isUpcoming)
);

export const selectMovie = (id: string) =>
  createSelector(selectMovies, ({ movies }) => {
    const movie = movies.find((movie) => movie.id === id);
    if (movie) {
      return movie;
    }
    return null;
  });

export const selectMovieScreeningDates = (id: string) =>
  createSelector(selectMovies, ({ movies }) => {
    const movie = movies.find((movie) => movie.id === id);
    if (movie) {
      return movie.screeningDates;
    }
    return null;
  });

export const selectMovieTicketPrice = (id: string) =>
  createSelector(selectMovies, ({ movies }) => {
    const movie = movies.find((movie) => movie.id === id);
    if (movie) {
      return movie.ticketPrice;
    }
    return null;
  });

export const selectIsFetchingMovies = createSelector(
  selectMovies,
  ({ isFetching }) => isFetching
);
