import React from "react";
import "./screening-dates.styles.scss";
import { IScreeningDatesProps } from "./types";

const locale = "pl-PL";

const ScreeningDates = ({
  screeningDates,
  activeDateIndex,
  onClick,
}: IScreeningDatesProps) => {
  return (
    <div className="screening-dates">
      {screeningDates?.map((screeningDate, index) => {
        const date = new Date(screeningDate.date);
        const weekday = date.toLocaleDateString(locale, { weekday: "short" });
        const dayNumber = date.toLocaleDateString(locale, { day: "2-digit" });
        const month = date.toLocaleDateString(locale, { month: "short" });
        return (
          <div
            key={index}
            onClick={() => onClick(index)}
            className={`screening-date ${
              index === activeDateIndex ? "active" : ""
            } `}
          >
            <p className="day-of-week">{weekday}</p>
            <p className="day-number">{dayNumber}</p>
            <p className="month">{month}</p>
          </div>
        );
      })}
    </div>
  );
};

export default ScreeningDates;
