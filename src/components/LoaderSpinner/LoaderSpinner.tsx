import React from "react";
import "./styles.scss";

const LoaderSpinner = () => (
  <div className="spinner-container">
    <div className="lds-ripple">
      <div></div>
      <div></div>
    </div>
  </div>
);

export default LoaderSpinner;
