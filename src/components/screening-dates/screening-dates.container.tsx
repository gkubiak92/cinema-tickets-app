import React, { useState } from "react";
import {
  IScreeningDatesContainerProps,
  IScreeningDatesContainerDispatchProps,
} from "./types";
import { IRootState } from "redux/types";
import { selectMovieScreeningDates } from "redux/movies/movies.selectors";
import { connect } from "react-redux";
import ScreeningDates from "./screening-dates.component";
import ScreeningHours from "./screening-hours.component";
import CustomButton from "components/custom-button/custombutton.component";
import { Dispatch } from "redux";
import { ReservationActionTypes } from "redux/reservation/reservation.types";
import { resetSelectedSeats } from "redux/reservation/reservation.actions";
import { useHistory } from "react-router-dom";

const ScreeningDatesContainer = ({
  movieId,
  screeningDates,
  resetSelectedSeats,
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
    resetSelectedSeats();
    history.push(`/seat-reservation/${movieId}`);
  };

  const canChooseSeat = activeDate && activeHour ? true : false;

  return (
    <div className="screening-dates-container">
      <ScreeningDates
        screeningDates={screeningDates}
        activeDateIndex={activeDateIndex}
        onClick={setActiveDate}
      />
      <ScreeningHours
        screeningDate={screeningDates![activeDateIndex]}
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

const mapStateToProps = (
  state: IRootState,
  ownProps: IScreeningDatesContainerProps
) => ({
  screeningDates: selectMovieScreeningDates(ownProps.movieId)(state),
});

const mapDispatchToProps = (dispatch: Dispatch<ReservationActionTypes>) => ({
  resetSelectedSeats: () => dispatch(resetSelectedSeats()),
});

export default connect(
  mapStateToProps,
  mapDispatchToProps
)(ScreeningDatesContainer);
