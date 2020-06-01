import React, { Dispatch } from "react";
import { createStructuredSelector } from "reselect";
import { ISideDrawerProps } from "./types";
import "./sidedrawer.styles.scss";
import { selectIsSideDrawerShown } from "../../redux/ui/ui.selectors";
import { IRootState } from "../../redux/types";
import { connect } from "react-redux";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { UIActionTypes } from "../../redux/ui/ui.types";
import { toggleSideDrawer } from "../../redux/ui/ui.actions";
import MenuItemsList from "../menu-items-list/menuitemslist.component";

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
