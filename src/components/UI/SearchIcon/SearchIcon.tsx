import React from "react";
import "./styles.scss";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { useDispatch } from "react-redux";
import { showSearchBar } from "redux/ui/actions";

const SearchIcon = () => {
  const dispatch = useDispatch();
  return (
    <div className="menu-icon">
      <FontAwesomeIcon icon="search" onClick={() => dispatch(showSearchBar())} />
    </div>
  )
};

export default SearchIcon;
