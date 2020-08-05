import React from "react";
import MenuItem from "components/UI/MenuItem/MenuItem";
import "./styles.scss";
import HeaderTitle from "components/UI/HeaderTitle/HeaderTitle";
import { faHome, faFilm } from "@fortawesome/free-solid-svg-icons";

const MenuItemsList = () => (
  <div className="menu-items-list">
    <HeaderTitle theme="dark" title="CINEMAPP" />
    <MenuItem to={"/"} title={"Home"} icon={faHome} />
    <MenuItem to={"/movies"} title={"Movies"} icon={faFilm} />
  </div>
);

export default MenuItemsList;
