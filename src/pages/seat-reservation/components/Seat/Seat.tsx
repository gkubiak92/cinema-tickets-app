import React, { useState } from "react";
import "./styles.scss";
import { IProps, ISeat } from "./types";
import {
  addSeatToReservation,
  removeSeatFromReservation,
} from "redux/reservation/actions";
import { connect } from "react-redux";

const Seat = ({
  type,
  row,
  seatNumber,
  isLegend,
  isSelected,
  addSeatToReservation,
  removeSeatFromReservation,
}: IProps) => {
  const [selected, selectSeat] = useState(isSelected);

  const onSeatClickHandler = () => {
    if (!isLegend && type !== "disabled" && type !== "booked") {
      const seat: ISeat = {
        id: `${row}${seatNumber}`,
        row: row,
        seatNumber: seatNumber,
      };
      if (!selected) {
        addSeatToReservation(seat);
      } else {
        removeSeatFromReservation(seat);
      }
      selectSeat(!selected);
    }
  };

  return (
    <div
      onClick={onSeatClickHandler}
      className={`seat ${type} ${selected ? "selected" : ""}`}
    />
  );
};

const mapDispatchToProps = {
  addSeatToReservation,
  removeSeatFromReservation,
};

export default connect(null, mapDispatchToProps)(Seat);
