import React from "react";
import MenuItem from "components/MenuItem/MenuItem";
import "./styles.scss";
import HeaderTitle from "components/HeaderTitle/HeaderTitle";

const MenuItemsList = () => (
  <div className="menu-items-list">
    <HeaderTitle theme="dark" />
    <MenuItem to={"/"} title={"Home"} icon={"home"} />
    <MenuItem to={"/movies"} title={"Movies"} icon={"film"} />
  </div>
);

export default MenuItemsList;
