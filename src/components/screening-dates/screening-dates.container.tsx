import React, { useState } from "react";
import {
  IScreeningDatesContainerProps,
  IScreeningDatesContainerDispatchProps,
} from "./types";
import { connect } from "react-redux";
import ScreeningDates from "./screening-dates.component";
import ScreeningHours from "./screening-hours.component";
import CustomButton from "components/custom-button/custombutton.component";
import { Dispatch } from "redux";
import { ReservationActionTypes } from "redux/reservation/reservation.types";
import {
  resetSelectedSeats,
  setReservationHallId,
} from "redux/reservation/reservation.actions";
import { useHistory } from "react-router-dom";

const ScreeningDatesContainer = ({
  movie,
  resetSelectedSeats,
  setReservationHallId,
}: IScreeningDatesContainerProps & IScreeningDatesContainerDispatchProps) => {
  const [{ activeDate, activeDateIndex }, setActiveDate] = useState({
    activeDate: undefined,
    activeDateIndex: 0,
  });
  const [{ activeHour, activeHourIndex }, setActiveHour] = useState({
    activeHour: undefined,
    activeHourIndex: 0,
  });
  const history = useHistory();

  const handleButtonClick = () => {
    console.log(activeDate);
    console.log(movie.screeningDates);
    const selectedScreeningDate = movie.screeningDates.find(
      (date) => date.date === activeDate
    );
    if (selectedScreeningDate) {
      console.log(selectedScreeningDate);
      setReservationHallId(selectedScreeningDate.hallId);
    }
    resetSelectedSeats();
    history.push(`/seat-reservation/${movie.id}`);
  };

  const canChooseSeat = activeDate && activeHour ? true : false;

  return (
    <div className="screening-dates-container">
      <ScreeningDates
        screeningDates={movie.screeningDates}
        activeDateIndex={activeDateIndex}
        onClick={setActiveDate}
      />
      <ScreeningHours
        screeningDate={movie.screeningDates[activeDateIndex]}
        activeHourIndex={activeHourIndex}
        onClick={setActiveHour}
      />
      <CustomButton
        type="button"
        block
        onClick={handleButtonClick}
        disabled={!canChooseSeat}
      >
        Take a seat
      </CustomButton>
    </div>
  );
};

const mapDispatchToProps = (dispatch: Dispatch<ReservationActionTypes>) => ({
  resetSelectedSeats: () => dispatch(resetSelectedSeats()),
  setReservationHallId: (hallId: string) =>
    dispatch(setReservationHallId(hallId)),
});

export default connect(null, mapDispatchToProps)(ScreeningDatesContainer);
