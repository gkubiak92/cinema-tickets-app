import React from "react";
import { Link } from "react-router-dom";
import "./headertitle.styles.scss";

const HeaderTitle = () => (
  <Link to="/">
    <h1 className="title">CINEMAPP</h1>
  </Link>
);

export default HeaderTitle;
