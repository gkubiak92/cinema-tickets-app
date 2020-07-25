import React, { useState } from 'react';
import './styles.scss';
import MoviesList from 'components/MoviesList/MoviesList';
import SearchBar from './SearchBar/SearchBar';
import { selectMovieBySearchFilter } from 'redux/movies/selectors';
import { useSelector } from 'react-redux';

const SearchBarContainer = () => {
    const [searchFilter, setSearchFilter] = useState('');
    const movies = useSelector(selectMovieBySearchFilter(searchFilter));

    const handleInputChange = (e: React.ChangeEvent<HTMLInputElement>) => {
        setSearchFilter(e.target.value);
    };

    return (
        <div className="search-bar-container">
            <SearchBar inputVal={searchFilter} handleChange={handleInputChange} />
            <div className="search-results">
                {movies.length
                    ? <MoviesList movies={movies} />
                    : <p>There is no movies matching entered title</p>}
            </div>
        </div>
    )
}

export default SearchBarContainer