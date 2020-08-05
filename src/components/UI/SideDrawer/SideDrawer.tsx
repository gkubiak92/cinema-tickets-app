import React from "react";
import { connect } from "react-redux";
import { IProps } from "./types";
import "./styles.scss";
import { selectIsSideDrawerShown } from "redux/ui/selectors";
import { toggleSideDrawer } from "redux/ui/actions";
import { IRootState } from "redux/types";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import MenuItemsList from "components/UI/MenuItemsList/MenuItemsList";
import { faTimes } from "@fortawesome/free-solid-svg-icons";

const SideDrawer = ({ show, toggleSideDrawer }: IProps) => (
  <div className={`sidedrawer ${show ? "show" : ""}`}>
    <div onClick={toggleSideDrawer} className="close-button">
      <FontAwesomeIcon icon={faTimes} />
    </div>
    <MenuItemsList />
  </div>
);

const mapStateToProps = (state: IRootState) => ({
  show: selectIsSideDrawerShown(state),
});

const mapDispatchToProps = {
  toggleSideDrawer,
};

export default connect(mapStateToProps, mapDispatchToProps)(SideDrawer);
