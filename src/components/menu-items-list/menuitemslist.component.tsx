import React from "react";
import MenuItem from "../menu-item/menuitem.component";
import "./menuitemslist.styles.scss";

const MenuItemsList = () => (
  <div className="menu-items-list">
    <MenuItem to={"/movies"} title={"Movies"} icon={"film"} />
  </div>
);

export default MenuItemsList;
