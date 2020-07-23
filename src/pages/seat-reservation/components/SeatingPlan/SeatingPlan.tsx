import React from "react";
import "./styles.scss";
import Seat from "pages/seat-reservation/components/Seat/Seat";
import { connect } from "react-redux";
import {
  selectSelectedSeats,
  selectHallSeatArrangement,
} from "redux/reservation/selectors";
import { IRootState } from "redux/types";
import { IMappedState, Props } from "./types";
import { SeatType } from "pages/seat-reservation/components/Seat/types";
import { selectMovieScreeningBookedSeats } from "redux/screenings/selectors";
import LoaderSpinner from "components/LoaderSpinner/LoaderSpinner";

const SeatingPlan = ({
  selectedSeats,
  seatArrangement,
  bookedSeats,
}: Props & IMappedState) => {
  return (
    <>
      <div className="screen" />
      <div className="seating-plan">
        {Object.entries(seatArrangement).map((row) => {
          return bookedSeats ? (
            <div key={row[0]} className="row">
              {row[1].map((seat, index) => {
                const seatIndex = `${row[0]}${index}`;
                const isBooked = bookedSeats.includes(seatIndex);
                const type: SeatType = seat.disabled
                  ? "disabled"
                  : isBooked
                  ? "booked"
                  : "";
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
                    seatNumber={index+1}
                    isSelected={isSelected}
                  />
                );
              })}
            </div>
          ) : <LoaderSpinner />;
        })}
      </div>
    </>
  );
};

const mapStateToProps = (state: IRootState, ownProps: Props) => ({
  selectedSeats: selectSelectedSeats(state),
  seatArrangement: selectHallSeatArrangement(state),
  bookedSeats: selectMovieScreeningBookedSeats(ownProps.screeningId)(state),
});

export default connect(mapStateToProps)(SeatingPlan);
