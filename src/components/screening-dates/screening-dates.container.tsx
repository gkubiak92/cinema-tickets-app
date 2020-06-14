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
    activeDate: "",
    activeDateIndex: 0,
  });
  const [{ activeHour, activeHourIndex }, setActiveHour] = useState({
    activeHour: "",
    activeHourIndex: 0,
  });
  const history = useHistory();

  const handleButtonClick = () => {
    // setting hallId in state for actual chosen movie, date and hour
    const selectedScreeningDate = movie.screeningDates.find((date) => {
      // TODO unify dates in whole app to be the same format
      const screeningDate = new Date(date.date);
      const choosenDate = new Date(activeDate);
      return screeningDate.getTime() === choosenDate.getTime();
    });
    if (selectedScreeningDate) {
      setReservationHallId(
        selectedScreeningDate.hoursAndHalls[activeHourIndex].hallId
      );
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
