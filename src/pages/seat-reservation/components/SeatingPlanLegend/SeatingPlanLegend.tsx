import React from "react";
import Seat from "pages/seat-reservation/components/Seat/Seat";
import "./styles.scss";

const SeatingPlanLegend = () => (
  <div className="legend">
    <div className="seat-description">
      <Seat isLegend type="" row="" seatNumber={-1} />
      <p>available</p>
    </div>
    <div className="seat-description">
      <Seat isLegend type="booked" row="" seatNumber={-1} />
      <p>booked</p>
    </div>
    <div className="seat-description">
      <Seat isLegend type="" isSelected={true} row="" seatNumber={-1} />
      <p>selected</p>
    </div>
  </div>
);

export default SeatingPlanLegend;
