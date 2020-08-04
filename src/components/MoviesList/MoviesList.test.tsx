import React from 'react';
import { render, fireEvent, screen } from 'tests/test-utils';
import MoviesList from './MoviesList';
import { IMovie } from 'api/types';
import { BrowserRouter } from 'react-router-dom';

const mockMovies: IMovie[] = [
    {
        id: '1',
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
    },
    {
        id: '2',
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
    },
    {
        id: '3',
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
    },
];

describe('MoviesList component', () => {
    const defaultLocation = 'http://localhost';
    afterEach(() => {
        window.history.replaceState({}, '', defaultLocation);
    });

    test('render MoviesList component', () => {
        const { container } = render(
            <BrowserRouter>
                <MoviesList movies={[]} />
            </BrowserRouter>
        );
        expect(container).toBeInTheDocument();
    });

    test('render list of 3 movieListItem components', () => {
        const { container } = render(
            <BrowserRouter>
                <MoviesList movies={mockMovies} />
            </BrowserRouter>
        );
        const movieListItems = document.querySelectorAll('.movie-list-item');
        expect(movieListItems.length).toBe(mockMovies.length);
    })

    test('clicking movieListItem redirects properly', () => {
        const link = `/movie/${mockMovies[0].id}`;
        const { container } = render(
            <BrowserRouter>
                <MoviesList movies={mockMovies} />
            </BrowserRouter>
        );
        const firstMovieListItem = container.firstChild?.firstChild;
        fireEvent.click(firstMovieListItem!);
        expect(window.location.href).toBe(`http://localhost${link}`);
    })
})