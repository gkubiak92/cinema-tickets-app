import React, { useState } from "react";
import "./seat.styles.scss";
import { ISeatProps, ISeat, ISeatDispatchProps } from "./types";
import { Dispatch } from "redux";
import { ReservationActionTypes } from "redux/reservation/types";
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
}: ISeatProps & ISeatDispatchProps) => {
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

const mapDispatchToProps = (dispatch: Dispatch<ReservationActionTypes>) => ({
  addSeatToReservation: (seat: ISeat) => dispatch(addSeatToReservation(seat)),
  removeSeatFromReservation: (seat: ISeat) =>
    dispatch(removeSeatFromReservation(seat)),
});

export default connect(null, mapDispatchToProps)(Seat);
