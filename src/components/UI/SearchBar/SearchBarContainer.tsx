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

    const SearchResult = () => {
        if (searchFilter !== '') {
            if (movies.length > 0) {
                return <MoviesList movies={movies} />
            } else {
                return <p>There is no movies matching entered title</p>
            }
        } else {
            return null;
        }
    }

    return (
        <div className="search-bar-container">
            <SearchBar inputVal={searchFilter} handleChange={handleInputChange} />
            <div className="search-results">
                {<SearchResult />}
            </div>
        </div>
    )
}

export default SearchBarContainer