import React from "react";
import { Link } from "react-router-dom";
import { IMenuItemProps } from "./types";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import "./styles.scss";
import { Dispatch } from "redux";
import { UIActionTypes } from "redux/ui/types";
import { toggleSideDrawer } from "redux/ui/actions";
import { connect } from "react-redux";

const MenuItem = ({ to, title, icon, toggleSideDrawer }: IMenuItemProps) => (
  <Link to={to} onClick={toggleSideDrawer}>
    <div className="menu-item">
      <FontAwesomeIcon icon={icon} />
      <span className="title">{title}</span>
    </div>
  </Link>
);

const mapDispatchToProps = (dispatch: Dispatch<UIActionTypes>) => ({
  toggleSideDrawer: () => dispatch(toggleSideDrawer()),
});

export default connect(null, mapDispatchToProps)(MenuItem);
