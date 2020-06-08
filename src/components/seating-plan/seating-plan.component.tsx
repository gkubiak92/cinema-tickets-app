import React from "react";
import "./seating-plan.styles.scss";
import { seatArrangement } from "../../data/seat-arrangement";
import Seat from "components/seat/seat.component";
import { connect } from "react-redux";
import { selectSelectedSeats } from "redux/reservation/reservation.selectors";
import { IRootState } from "redux/types";
import { ISeatingPlanMapStateProps } from "./types";
import { SeatType } from "components/seat/types";

const SeatingPlan = ({ selectedSeats }: ISeatingPlanMapStateProps) => {
  return (
    <>
      <div className="screen" />
      <div className="seating-plan">
        {Object.entries(seatArrangement).map((row) => {
          return (
            <div key={row[0]} className="row">
              {row[1].map((seat, index) => {
                const type: SeatType = seat.disabled ? "disabled" : "";
                const seatIndex = `${row[0]}${index}`;
                let isSelected = false;
                selectedSeats.forEach((selectedSeat) => {
                  if (selectedSeat.id === seatIndex) {
                    isSelected = true;
                  }
                });
                return (
                  <Seat
                    key={index}
                    type={type}
                    row={row[0]}
                    seatNumber={index}
                    isSelected={isSelected}
                  />
                );
              })}
            </div>
          );
        })}
      </div>
    </>
  );
};

const mapStateToProps = (state: IRootState) => ({
  selectedSeats: selectSelectedSeats(state),
});

export default connect(mapStateToProps)(SeatingPlan);
