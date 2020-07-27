import React from "react";
import { IScreeningHoursProps } from "./types";
import "./styles.scss";
import {
  setReservationHour,
  setReservationHallId,
  setReservationScreeningId,
} from "redux/reservation/actions";
import { connect } from "react-redux";

const ScreeningHours = ({
  screeningDate,
  activeHourIndex,
  onClick,
  setReservationHour,
  setReservationHallId,
  setReservationScreeningId,
}: IScreeningHoursProps) => {
  return (
    <div className="screening-hours">
      {screeningDate.hoursAndHalls.map((hourAndHall, index) => {
        const { hallId, hour, screeningId } = hourAndHall;
        return (
          <div
            key={index}
            onClick={() => {
              onClick({ hour, index });
              setReservationHour(hour);
              setReservationHallId(hallId);
              setReservationScreeningId(screeningId);
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
  setReservationScreeningId,
};

export default connect(null, mapDispatchToProps)(ScreeningHours);
