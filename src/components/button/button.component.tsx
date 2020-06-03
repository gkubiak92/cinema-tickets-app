import React from "react";
import { IButtonProps } from "./types";
import "./button.styles.scss";
import { Link } from "react-router-dom";

const Button = ({ text, onClick, to, type, disabled }: IButtonProps) => {
  if (onClick) {
    return (
      <button className={type} onClick={() => onClick} disabled={disabled}>
        {text}
      </button>
    );
  } else if (to) {
    return (
      <Link to={to}>
        <button className={type} disabled={disabled}>
          {text}
        </button>
      </Link>
    );
  } else {
    return (
      <button className={type} disabled={disabled}>
        {text}
      </button>
    );
  }
};

export default Button;
