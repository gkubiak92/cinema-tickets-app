import React from "react";
import "./styles.scss";
import Seat from "components/Seat/Seat";
import { connect } from "react-redux";
import {
  selectSelectedSeats,
  selectHallSeatArrangement,
} from "redux/reservation/selectors";
import { IRootState } from "redux/types";
import { ISeatingPlanMappedState } from "./types";
import { SeatType } from "components/seat/types";

const SeatingPlan = ({
  selectedSeats,
  seatArrangement,
}: ISeatingPlanMappedState) => {
  return (
    <>
      <div className="screen" />
      <div className="seating-plan">
        {Object.entries(seatArrangement.seatArrangement).map((row) => {
          return (
            <div key={row[0]} className="row">
              {row[1].map((seat, index) => {
                const type: SeatType = seat.disabled ? "disabled" : "";
                let isSelected = false;
                selectedSeats.forEach((selectedSeat) => {
                  if (selectedSeat.id === seat.seatIndex) {
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
  seatArrangement: selectHallSeatArrangement(state),
});

export default connect(mapStateToProps)(SeatingPlan);
