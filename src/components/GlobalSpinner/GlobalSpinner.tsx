import React from "react";
import "./styles.scss";
import LoaderSpinner from "components/LoaderSpinner/LoaderSpinner";
import { IRootState } from "redux/types";
import { connect } from "react-redux";
import { IMappedState } from "./types";

const GlobalSpinner = ({ isSpinning }: IMappedState) => {
  const spinning = isSpinning ? "spinning" : "";
  const classes = `global-spinner-container ${spinning}`;
  return (
    <div className={classes}>
      <LoaderSpinner />
    </div>
  );
};

const mapStateToProps = (state: IRootState) => ({
  isSpinning: state.ui.spinner,
});

export default connect(mapStateToProps)(GlobalSpinner);
