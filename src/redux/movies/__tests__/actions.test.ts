import { MovieActionNames, IFetchMoviesStartAction, IFetchMoviesSuccessAction, IFetchMoviesFailureAction } from '../types';
import { fetchMoviesStart, fetchMoviesSuccess, fetchMoviesFailure } from '../actions';

describe('movies actions', () => {
    it('should create action to start Fetch Movies', () => {
        const expectedAction: IFetchMoviesStartAction = {
            type: MovieActionNames.FETCH_MOVIES_START,
        };
        expect(fetchMoviesStart()).toStrictEqual(expectedAction);
    });

    it('should create action to fetch movie success', () => {
        const expectedAction: IFetchMoviesSuccessAction = {
            type: MovieActionNames.FETCH_MOVIES_SUCCESS,
            payload: []
        };
        expect(fetchMoviesSuccess([])).toStrictEqual(expectedAction);
    })

    it('should create action for fetch movies failure', () => {
        const error = 'some error';
        const expectedAction: IFetchMoviesFailureAction = {
            type: MovieActionNames.FETCH_MOVIES_FAILURE,
            payload: error,
        };
        expect(fetchMoviesFailure(error)).toStrictEqual(expectedAction);
    })
})