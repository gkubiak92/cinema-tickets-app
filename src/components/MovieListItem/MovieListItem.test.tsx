import React from 'react';
import MovieListItem from './MovieListItem';
import { render, fireEvent } from 'tests/test-utils';
import { IMovie } from 'api/types';
import { library } from '@fortawesome/fontawesome-svg-core';
import { faStar } from '@fortawesome/free-regular-svg-icons';
import { hideSearchBar } from 'redux/ui/actions';
import { store as initialStore } from 'redux/store'

library.add(
    faStar,
)

const mockMovie: IMovie = {
    id: '12345',
    description: 'test description',
    director: 'test director',
    genres: ['action', 'thriller'],
    isNew: false,
    isPopular: false,
    isUpcoming: false,
    photosUrl: [],
    rating: 5,
    screeningDates: [],
    stars: [],
    thumbnailUrl: 'testurl.jpg',
    ticketPrice: 29.99,
    title: 'Test Movie',
    writer: 'test writer'
}

describe('MovieListItem component', () => {
    test('Render MovieListItem component with proper data', () => {
        const { container } = render(<MovieListItem movie={mockMovie} />);
        expect(container).toBeInTheDocument();
        const content = document.querySelector('.content');
        expect(content!.children.item(0)?.textContent).toBe(mockMovie.title);
        expect(content!.children.item(1)).toBeInTheDocument();
        expect(content!.children.item(2)?.textContent).toBe(mockMovie.director);
        const genres = document.querySelectorAll('.genre');
        expect(genres.length).toBe(mockMovie.genres.length);
    })

    test('clicking on comopnent hide search bar', () => {
        const mockStore = initialStore;
        mockStore.dispatch = jest.fn();
        const { container, store } = render(<MovieListItem movie={mockMovie} />, mockStore);
        expect(container).toBeInTheDocument();
        fireEvent.click(document.querySelector('.movie-list-item')!);
        expect(store.dispatch).toHaveBeenCalledTimes(1);
        expect(store.dispatch).toHaveBeenCalledWith(hideSearchBar());
    })
})
