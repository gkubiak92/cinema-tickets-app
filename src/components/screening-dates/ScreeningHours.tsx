import React from "react";
import { IScreeningHoursProps } from "./types";
import "./screening-hours.styles.scss";
import { Dispatch } from "redux";
import { ReservationActionTypes } from "redux/reservation/types";
import { setReservationHour } from "redux/reservation/actions";
import { connect } from "react-redux";

const ScreeningHours = ({
  screeningDate,
  activeHourIndex,
  onClick,
  setReservationHour,
}: IScreeningHoursProps) => {
  return (
    <div className="screening-hours">
      {screeningDate.hoursAndHalls.map((hourAndHall, index) => (
        <div
          key={index}
          onClick={() => {
            onClick({ activeHour: hourAndHall.hour, activeHourIndex: index });
            setReservationHour(hourAndHall.hour);
          }}
          className={`screening-hour ${
            index === activeHourIndex ? "active" : ""
          } `}
        >
          <span>{hourAndHall.hour}</span>
        </div>
      ))}
    </div>
  );
};

const mapDispatchToProps = (dispatch: Dispatch<ReservationActionTypes>) => ({
  setReservationHour: (hour: string) => dispatch(setReservationHour(hour)),
});

export default connect(null, mapDispatchToProps)(ScreeningHours);
