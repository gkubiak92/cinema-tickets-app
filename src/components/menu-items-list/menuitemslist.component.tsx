import React from "react";
import MenuItem from "components/menu-item/menuitem.component";
import "./menuitemslist.styles.scss";
import HeaderTitle from "components/header-title/headertitle.component";

const MenuItemsList = () => (
  <div className="menu-items-list">
    <HeaderTitle />
    <MenuItem to={"/"} title={"Home"} icon={"home"} />
    <MenuItem to={"/movies"} title={"Movies"} icon={"film"} />
  </div>
);

export default MenuItemsList;
