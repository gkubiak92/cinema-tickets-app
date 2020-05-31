import React from "react";
import "./header.styles.scss";
import MenuIcon from "../menu-icon/menu-icon.component";
import SearchIcon from "../search-icon/search-icon.component";
import SideDrawer from "../side-drawer/sidedrawer.component";

const Header = () => (
  <header className="header">
    <SideDrawer />
    <MenuIcon />
    <SearchIcon />
  </header>
);



export default Header;
