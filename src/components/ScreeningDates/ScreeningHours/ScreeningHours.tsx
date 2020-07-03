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
      {screeningDate.hoursAndHalls.map((hourAndHall, index) => {
        const { hallId, hour } = hourAndHall;
        return (
          <div
            key={index}
            onClick={() => {
              onClick({ activeHour: hour, activeHourIndex: index });
              setReservationHour(hour);
              setReservationHallId(hallId);
            }}
            className={`screening-hour ${
              index === activeHourIndex ? "active" : ""
            } `}
          >
            <span>{hour}</span>
          </div>
        );
      })}
    </div>
  );
};

const mapDispatchToProps = {
  setReservationHour,
  setReservationHallId,
};

export default connect(null, mapDispatchToProps)(ScreeningHours);
