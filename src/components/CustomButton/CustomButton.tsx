import React from "react";
import { ICustomButtonProps } from "./types";
import "./styles.scss";
import { Link } from "react-router-dom";

const CustomButton: React.FC<ICustomButtonProps> = ({
  onClick,
  to,
  block,
  disabled,
  children,
}) => {
  if (onClick) {
    return (
      <button
        className={block ? "block" : ""}
        onClick={() => onClick()}
        disabled={disabled}
      >
        {children}
      </button>
    );
  } else if (to) {
    return (
      <Link to={to}>
        <button className={block ? "block" : ""} disabled={disabled}>
          {children}
        </button>
      </Link>
    );
  } else {
    return (
      <button className={block ? "block" : ""} disabled={disabled}>
        {children}
      </button>
    );
  }
};

export default CustomButton;
