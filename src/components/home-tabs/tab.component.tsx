import React from "react";

interface ITabProps {
  name: string;
  isActive: boolean;
  onClickHandler: Function;
}

const Tab = ({ name, isActive, onClickHandler }: ITabProps) => (
  <li
    className={isActive ? "active" : undefined}
    onClick={() => onClickHandler()}
  >
    {name}
  </li>
);

export default Tab;
