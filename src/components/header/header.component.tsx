import React from "react";
import "./header.styles.scss";
import MenuIcon from "components/menu-icon/menu-icon.component";
import SearchIcon from "components/search-icon/search-icon.component";
import SideDrawer from "components/side-drawer/sidedrawer.component";
import HeaderTitle from "components/header-title/headertitle.component";

const Header = () => (
  <header className="header">
    <SideDrawer />
    <MenuIcon />
    <HeaderTitle theme="light" />
    <SearchIcon />
  </header>
);

export default Header;
