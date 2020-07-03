import React from "react";
import "./styles.scss";
import MenuIcon from "components/MenuIcon/MenuIcon";
import SearchIcon from "components/SearchIcon/SearchIcon";
import SideDrawer from "components/SideDrawer/SideDrawer";
import HeaderTitle from "components/HeaderTitle/HeaderTitle";

const Header = () => (
  <header className="header">
    <SideDrawer />
    <MenuIcon />
    <HeaderTitle theme="light" />
    <SearchIcon />
  </header>
);

export default Header;
