import React from 'react';
import { render, screen } from '@testing-library/react';
import MovieInfo from './MovieInfo';
import { IMovie } from 'api/types';

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
const mockDate = 'Mon, 03 Aug 2020 16:38:27 GMT';
const mockHour = "18:00";

describe('MovieInfo comopnent', () => {
    test('Render MovieInfo component', () => {
        const { container } = render(
            <MovieInfo movie={mockMovie} date={mockDate} hour={mockHour} />
        );
        expect(container).toBeInTheDocument();

        const component = container.firstChild;
        expect(component).toHaveClass('movie-info');
        expect(screen.getByText(mockMovie.title)).toBeInTheDocument();
        const formatedDate = new Intl.DateTimeFormat('pl-PL').format(new Date(mockDate));
        expect(screen.getByText(formatedDate)).toBeInTheDocument();
        expect(screen.getByText(mockHour)).toBeInTheDocument();
    });

    test('Display empty date when date is invalid', () => {
        const mockDate = 'invalidDate';
        const { container } = render(
            <MovieInfo movie={mockMovie} date={mockDate} hour={mockHour} />
        );
        expect(container).toBeInTheDocument();
        const movieDetails = document.querySelector('.movie-details');
        expect(movieDetails?.children.item(1)?.textContent).toBe('');
    });
});