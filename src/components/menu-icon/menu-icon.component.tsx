import React, { Dispatch } from "react";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faBars } from "@fortawesome/free-solid-svg-icons";
import { toggleSideDrawer } from "../../redux/ui/ui.actions";
import { UIActionTypes } from "../../redux/ui/ui.types";
import { IMenuIconProps } from './types'
import { connect } from "react-redux";

const MenuIcon = ({ toggleSideDrawer }: IMenuIconProps) => (
  <div onClick={toggleSideDrawer} className="menu-icon">
    <FontAwesomeIcon icon={faBars} />
  </div>
);

const mapDispatchToProps = (dispatch: Dispatch<UIActionTypes>) => ({
  toggleSideDrawer: () => dispatch(toggleSideDrawer())
})

export default connect(null, mapDispatchToProps)(MenuIcon);
