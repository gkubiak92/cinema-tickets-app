import React from "react";
import { IScreeningHoursProps } from "./types";
import "./styles.scss";
import {
  setReservationHour,
  setReservationHallId,
} from "redux/reservation/actions";
import { connect } from "react-redux";

const ScreeningHours = ({
  screeningDate,
  activeHourIndex,
  onClick,
  setReservationHour,
  setReservationHallId,
}: IScreeningHoursProps) => {
  return (
    <div className="screening-hours">
      {screeningDate.hoursAndHalls.map((hourAndHall, index) => (
        <div
          key={index}
          onClick={() => {
            onClick({ activeHour: hourAndHall.hour, activeHourIndex: index });
            setReservationHour(hourAndHall.hour);
            setReservationHallId(hourAndHall.hallId);
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

const mapDispatchToProps = {
  setReservationHour,
  setReservationHallId,
};

export default connect(null, mapDispatchToProps)(ScreeningHours);
