import React from "react";
import { IScreeningHoursProps } from "./types";

const ScreeningHours = ({ screeningDate }: IScreeningHoursProps) => {
  return (
    <div className="screening-hours">
      {screeningDate.hours.map((hour, index) => (
        <div key={index} className="screening-hour">
          <span>{hour}</span>
        </div>
      ))}
    </div>
  );
};

export default ScreeningHours;
