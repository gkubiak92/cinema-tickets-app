import React from 'react';
import MenuItem from '../menu-item/menuitem.component';

const MenuItemsList = () => (
    <div className="menu-items-list">
        <MenuItem to={"/movies"} title={"Movies"} />
    </div>
)

export default MenuItemsList;