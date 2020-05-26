import React from "react";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faBars } from "@fortawesome/free-solid-svg-icons";

const MenuIcon = () => (
  <div className="menu-icon">
    <FontAwesomeIcon icon={faBars} fontSize={"40px"} />
  </div>
);

export default MenuIcon;
