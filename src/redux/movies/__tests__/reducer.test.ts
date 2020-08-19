import { IMoviesState } from "../types";
import moviesReducer from '../reducer';
import { fetchMoviesStart, fetchMoviesSuccess, fetchMoviesFailure } from "../actions";
import { IMovie } from "api/types";

const initialState: IMoviesState = {
    movies: [],
    isFetching: false,
    error: "",
};

describe('movies reducer', () => {
    beforeEach(() => {
        initialState.movies = [];
        initialState.isFetching = false;
        initialState.error = '';
    });

    it('should set isFetching to true', () => {
        const expectedState = {
            ...initialState,
            isFetching: true,
        }
        expect(moviesReducer(initialState, fetchMoviesStart())).toStrictEqual(expectedState);
    });

    it('should set movies, isFetching to false and clear error', () => {
        const movies: IMovie[] = [{
            description: "Test desc",
            director: "Test director",
            genres: ["action", "thriller", "sci-Fi"],
            id: "0335jNrscd7uOFXZmxj0",
            isNew: false,
            isPopular: true,
            isUpcoming: false,
            photosUrl: [],
            rating: 3,
            screeningDates: [],
            stars: [],
            thumbnailUrl: "",
            ticketPrice: 19.99,
            title: "test",
            writer: "test writer",
        }];
        const expectedState = {
            movies,
            isFetching: false,
            error: '',
        };
        expect(moviesReducer(initialState, fetchMoviesSuccess(movies))).toStrictEqual(expectedState);
    });

    it('should set isFetching to false and set error', () => {
        const error = 'some error';
        const expectedState = {
            ...initialState,
            isFetching: false,
            error: error,
        };
        expect(moviesReducer(initialState, fetchMoviesFailure(error))).toStrictEqual(expectedState);
    });
})