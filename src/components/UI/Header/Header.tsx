import React from "react";
import "./styles.scss";
import MenuIcon from "components/UI/MenuIcon/MenuIcon";
import SearchIcon from "components/UI/SearchIcon/SearchIcon";
import SideDrawer from "components/UI/SideDrawer/SideDrawer";
import HeaderTitle from "components/UI/HeaderTitle/HeaderTitle";

const Header = () => (
  <header className="header">
    <SideDrawer />
    <MenuIcon />
    <HeaderTitle theme="light" />
    <SearchIcon />
  </header>
);

export default Header;
