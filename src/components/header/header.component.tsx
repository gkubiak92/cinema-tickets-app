import React from "react";
import { Link } from "react-router-dom";
import "./header.styles.scss";
import MenuIcon from "../menu-icon/menu-icon.component";
import SearchIcon from "../search-icon/search-icon.component";

const Header = () => (
  <header className="header">
    <Link to="/menu">
      <MenuIcon />
    </Link>
    <SearchIcon />
  </header>
);

export default Header;
