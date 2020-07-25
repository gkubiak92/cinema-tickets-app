import React from "react";
import "./styles.scss";
import MenuIcon from "components/UI/MenuIcon/MenuIcon";
import SearchIcon from "components/UI/SearchIcon/SearchIcon";
import SideDrawer from "components/UI/SideDrawer/SideDrawer";
import HeaderTitle from "components/UI/HeaderTitle/HeaderTitle";
import { IRootState } from "redux/types";
import { connect } from "react-redux";
import { IMappedState } from "./types";
import SearchBarContainer from "../SearchBar/SearchBarContainer";

const Header = ({ showSearchBar }: IMappedState) => (
  <header className="header">
    <SideDrawer />
    <MenuIcon />
    <HeaderTitle theme="light" />
    <SearchIcon />
    {showSearchBar && <SearchBarContainer />}
  </header>
);

const mapStateToProps = (state: IRootState) => ({
  showSearchBar: state.ui.showSearchBar
})

export default connect(mapStateToProps)(Header);
