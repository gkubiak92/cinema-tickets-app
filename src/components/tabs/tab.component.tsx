import React from "react";
import { ITabProps } from "./types";

const Tab = ({ name, isActive, onClickHandler }: ITabProps) => (
  <li
    className={isActive ? "active" : undefined}
    onClick={() => onClickHandler()}
  >
    {name}
  </li>
);

export default Tab;
