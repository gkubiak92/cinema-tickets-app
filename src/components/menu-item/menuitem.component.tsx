import React from "react";
import { Link } from "react-router-dom";
import { IMenuItemProps } from "./types";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import "./menuitem.styles.scss";

const MenuItem = ({ to, title, icon }: IMenuItemProps) => (
  <Link to={to}>
    <div className="menu-item">
      <FontAwesomeIcon icon={icon} />
      <span className="title">{title}</span>
    </div>
  </Link>
);

export default MenuItem;
