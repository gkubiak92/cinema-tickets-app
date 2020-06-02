import React from "react";
import { IScreeningHoursProps } from "./types";
import "./screening-hours.styles.scss";

const ScreeningHours = ({
  screeningDate,
  activeHourIndex,
  onClick,
}: IScreeningHoursProps) => {
  return (
    <div className="screening-hours">
      {screeningDate.hours.map((hour, index) => (
        <div
          key={index}
          onClick={() => onClick(index)}
          className={`screening-hour ${
            index === activeHourIndex ? "active" : ""
          } `}
        >
          <span>{hour}</span>
        </div>
      ))}
    </div>
  );
};

export default ScreeningHours;
