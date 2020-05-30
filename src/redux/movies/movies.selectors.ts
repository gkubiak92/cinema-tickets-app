import { createSelector } from 'reselect';
import { IRootState } from '../types'

export const selectMovies = (state: IRootState) => state.movies;

export const selectNewMovies = createSelector(
    selectMovies,
    ({ movies }) => movies.filter((movie) => movie.isNew)
)

export const selectPopularMovies = createSelector(
    selectMovies,
    ({ movies }) => movies.filter((movie) => movie.isPopular)
)

export const selectUpcomingMovies = createSelector(
    selectMovies,
    ({ movies }) => movies.filter((movie) => movie.isUpcoming)
)