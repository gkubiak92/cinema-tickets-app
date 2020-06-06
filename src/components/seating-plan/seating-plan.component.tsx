import React from "react";
import "./seating-plan.styles.scss";
import { seatArrangement } from "../../data/seat-arrangement";
import Seat from "components/seat/seat.component";

const SeatingPlan = () => {
  return (
    <>
      <div className="screen" />
      <div className="seating-plan">
        {Object.entries(seatArrangement).map((row) => {
          return (
            <div key={row[0]} className="row">
              {row[1].map((seat, index) => {
                const type = seat.disabled ? "disabled" : "";
                return (
                  <Seat
                    key={index}
                    type={type}
                    row={row[0]}
                    seatNumber={index}
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

export default SeatingPlan;
