import React, { useState } from "react";
import "./seat.styles.scss";
import { ISeatProps, ISeat, ISeatDispatchProps } from "./types";
import { Dispatch } from "redux";
import { ReservationActionTypes } from "redux/reservation/reservation.types";
import { addSeatToReservation } from "redux/reservation/reservation.actions";
import { connect } from "react-redux";

const Seat = ({
  type,
  row,
  seatNumber,
  addSeatToReservation,
}: ISeatProps & ISeatDispatchProps) => {
  const [selected, selectSeat] = useState(false);

  return (
    <div
      onClick={() => {
        if (type !== "disabled" && type !== "booked") {
          selectSeat(!selected);
          console.log(`you chosed seat ${row} ${seatNumber}`);
          const seat: ISeat = {
            row: row,
            seatNumber: seatNumber,
          };
          addSeatToReservation(seat);
        }
      }}
      className={`seat ${type} ${selected ? "selected" : ""}`}
    ></div>
  );
};

const mapDispatchToProps = (dispatch: Dispatch<ReservationActionTypes>) => ({
  addSeatToReservation: (seat: ISeat) => dispatch(addSeatToReservation(seat)),
});

export default connect(null, mapDispatchToProps)(Seat);
