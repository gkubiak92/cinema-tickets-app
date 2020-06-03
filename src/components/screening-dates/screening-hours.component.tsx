import React from "react";
import { IScreeningHoursProps } from "./types";
import "./screening-hours.styles.scss";
import { Dispatch } from "redux";
import { ReservationActionTypes } from "redux/reservation/reservation.types";
import { setReservationHour } from "redux/reservation/reservation.actions";
import { connect } from "react-redux";

const ScreeningHours = ({
  screeningDate,
  activeHourIndex,
  onClick,
  setReservationHour,
}: IScreeningHoursProps) => {
  return (
    <div className="screening-hours">
      {screeningDate.hours.map((hour, index) => (
        <div
          key={index}
          onClick={() => {
            onClick({ activeHour: hour, activeHourIndex: index });
            setReservationHour(hour);
          }}
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

const mapDispatchToProps = (dispatch: Dispatch<ReservationActionTypes>) => ({
  setReservationHour: (hour: string) => dispatch(setReservationHour(hour)),
});

export default connect(null, mapDispatchToProps)(ScreeningHours);
