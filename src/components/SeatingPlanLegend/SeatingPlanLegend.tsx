import React from "react";
import Seat from "components/Seat/Seat";

const SeatingPlanLegend = () => (
  <div className="legend">
    <Seat isLegend type="" row="" seatNumber={-1} />
    <p>available</p>
    <Seat isLegend type="booked" row="" seatNumber={-1} />
    <p>booked</p>
    <Seat isLegend type="" isSelected={true} row="" seatNumber={-1} />
    <p>selected</p>
  </div>
);

export default SeatingPlanLegend;
