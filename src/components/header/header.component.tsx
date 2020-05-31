import React from "react";
import { Link } from "react-router-dom";
import "./header.styles.scss";
import MenuIcon from "../menu-icon/menu-icon.component";
import SearchIcon from "../search-icon/search-icon.component";
import SideDrawer from "../side-drawer/sidedrawer.component";

const Header = () => (
  <header className="header">
    <SideDrawer show={false} />
    <Link to="/menu">
      <MenuIcon />
    </Link>
    <SearchIcon />
  </header>
);

export default Header;
