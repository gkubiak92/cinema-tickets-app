import React from "react";
import "./styles.scss";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { toggleSideDrawer } from "redux/ui/actions";
import { IMenuIconProps } from "./types";
import { connect } from "react-redux";
import { faBars } from "@fortawesome/free-solid-svg-icons";

const MenuIcon = ({ toggleSideDrawer }: IMenuIconProps) => (
  <div onClick={toggleSideDrawer} className="menu-icon">
    <FontAwesomeIcon icon={faBars} />
  </div>
);

const mapDispatchToProps = {
  toggleSideDrawer,
};

export default connect(null, mapDispatchToProps)(MenuIcon);
