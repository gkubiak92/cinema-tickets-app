import React from 'react'
import './styles.scss';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { useDispatch } from 'react-redux';
import { hideSearchBar } from 'redux/ui/actions';
import { IProps } from './types';

const SearchBar = ({ inputVal, handleChange }: IProps) => {
    const dispatch = useDispatch();

    return (
        <div className="search-bar">
            <input className="search-input"
                type="text"
                placeholder="Search Movie"
                value={inputVal}
                onChange={(e) => handleChange(e)} />
            <FontAwesomeIcon className="close-icon"
                size="lg"
                icon="times"
                onClick={() => dispatch(hideSearchBar())} />
        </div>
    )
}

export default SearchBar

