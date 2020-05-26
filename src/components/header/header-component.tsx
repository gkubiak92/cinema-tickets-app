import React from "react";
import "./header-component.styles.scss";
import MenuIcon from "../menu-icon/menu-icon.component";
import SearchIcon from "../search-icon/search-icon.component";

const Header = () => (
  <header className="header">
    <MenuIcon />
    <SearchIcon />
  </header>
);

export default Header;
