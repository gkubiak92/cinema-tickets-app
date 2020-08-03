import React from 'react';
import MovieListItem from './MovieListItem';
import { render } from 'tests/test-utils';
import { IMovie } from 'api/types';
import { library } from '@fortawesome/fontawesome-svg-core';
import { faStar } from '@fortawesome/free-regular-svg-icons';

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
    test('Render MovieListItem component', () => {
        const { container } = render(<MovieListItem movie={mockMovie} />);
        expect(container).toBeInTheDocument();
    })
})
