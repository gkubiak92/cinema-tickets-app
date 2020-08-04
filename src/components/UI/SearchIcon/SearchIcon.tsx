import React from "react";
import "./styles.scss";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { useDispatch } from "react-redux";
import { showSearchBar } from "redux/ui/actions";
import { faSearch } from "@fortawesome/free-solid-svg-icons";

const SearchIcon = () => {
  const dispatch = useDispatch();
  return (
    <div className="menu-icon" onClick={() => dispatch(showSearchBar())}>
      <FontAwesomeIcon icon={faSearch} />
    </div>
  )
};

export default SearchIcon;
