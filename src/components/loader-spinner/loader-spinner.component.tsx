import React from "react";
import "./loader-spinner.styles.scss";

const LoaderSpinner = () => (
  <div className="spinner-container">
    <div className="lds-ripple">
      <div></div>
      <div></div>
    </div>
  </div>
);

export default LoaderSpinner;
