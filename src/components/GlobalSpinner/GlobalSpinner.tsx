import React from "react";
import "./styles.scss";
import LoaderSpinner from "components/LoaderSpinner/LoaderSpinner";

const GlobalSpinner = () => {
  return (
    <div className="global-spinner-container">
      <LoaderSpinner />
    </div>
  );
};

export default GlobalSpinner;
