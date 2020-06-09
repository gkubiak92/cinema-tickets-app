import React from "react";
import { Link } from "react-router-dom";
import "./headertitle.styles.scss";
import { IHeaderTitleProps } from "./types";

const HeaderTitle = ({ theme }: IHeaderTitleProps) => (
  <Link to="/">
    <h1 className={`title ${theme}`}>CINEMAPP</h1>
  </Link>
);

export default HeaderTitle;
