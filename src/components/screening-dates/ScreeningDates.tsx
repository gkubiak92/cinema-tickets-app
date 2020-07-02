import React from "react";
import { IScreeningDatesProps } from "./types";
import "./screening-dates.styles.scss";
import { Dispatch } from "redux";
import { ReservationActionTypes } from "redux/reservation/types";
import { setReservationDate } from "redux/reservation/actions";
import { connect } from "react-redux";

const locale = "pl-PL";

const ScreeningDates = ({
  screeningDates,
  activeDateIndex,
  onClick,
  setReservationDate,
}: IScreeningDatesProps) => {
  return (
    <div className="screening-dates">
      {screeningDates.map((screeningDate, index) => {
        const date = new Date(screeningDate.date);
        const weekday = date.toLocaleDateString(locale, { weekday: "short" });
        const dayNumber = date.toLocaleDateString(locale, { day: "2-digit" });
        const month = date.toLocaleDateString(locale, { month: "short" });
        return (
          <div
            key={index}
            onClick={() => {
              onClick({ activeDate: date, activeDateIndex: index });
              setReservationDate(date.toLocaleDateString());
            }}
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

const mapDispatchToProps = (dispatch: Dispatch<ReservationActionTypes>) => ({
  setReservationDate: (date: string) => dispatch(setReservationDate(date)),
});

export default connect(null, mapDispatchToProps)(ScreeningDates);
