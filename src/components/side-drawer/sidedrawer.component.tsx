import React, { Dispatch } from "react";
import { connect } from "react-redux";
import { createStructuredSelector } from "reselect";
import { ISideDrawerProps } from "./types";
import "./sidedrawer.styles.scss";
import { selectIsSideDrawerShown } from "redux/ui/selectors";
import { UIActionTypes } from "redux/ui/types";
import { toggleSideDrawer } from "redux/ui/actions";
import { IRootState } from "redux/types";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import MenuItemsList from "components/menu-items-list/menuitemslist.component";

const SideDrawer = ({ show, toggleSideDrawer }: ISideDrawerProps) => (
  <div className={`sidedrawer ${show ? "show" : ""}`}>
    <div onClick={toggleSideDrawer} className="close-button">
      <FontAwesomeIcon icon="times" />
    </div>
    <MenuItemsList />
  </div>
);

const mapStateToProps = createStructuredSelector<IRootState, ISideDrawerProps>({
  show: selectIsSideDrawerShown,
});

const mapDispatchToProps = (dispatch: Dispatch<UIActionTypes>) => ({
  toggleSideDrawer: () => dispatch(toggleSideDrawer()),
});

export default connect(mapStateToProps, mapDispatchToProps)(SideDrawer);
