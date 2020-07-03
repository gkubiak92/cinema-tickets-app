import React from "react";
import "./styles.scss";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { toggleSideDrawer } from "redux/ui/actions";
import { IMenuIconProps } from "./types";
import { connect } from "react-redux";

const MenuIcon = ({ toggleSideDrawer }: IMenuIconProps) => (
  <div onClick={toggleSideDrawer} className="menu-icon">
    <FontAwesomeIcon icon="bars" />
  </div>
);

const mapDispatchToProps = {
  toggleSideDrawer,
};

export default connect(null, mapDispatchToProps)(MenuIcon);
