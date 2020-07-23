import React, { useState } from "react";
import { IProps, IMappedActions, IMappedState } from "./types";
import { connect } from "react-redux";
import ScreeningDates from "./ScreeningDates/ScreeningDates";
import ScreeningHours from "./ScreeningHours/ScreeningHours";
import CustomButton from "components/CustomButton/CustomButton";
import { resetSelectedSeats } from "redux/reservation/actions";
import { useHistory } from "react-router-dom";
import { IRootState } from "redux/types";
import { selectMovieScreeningDates } from "redux/screenings/selectors";
import LoaderSpinner from "components/LoaderSpinner/LoaderSpinner";
import {
  fetchHallDataStart,
  setReservationMovieId,
} from "redux/reservation/actions";
import { selectReservationScreeningId } from "redux/reservation/selectors";

const ScreeningDatesContainer = ({
  fetchHallDataStart,
  resetSelectedSeats,
  setReservationMovieId,
  movieId,
  dates,
  screeningId,
}: IProps & IMappedActions & IMappedState) => {
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
    resetSelectedSeats();
    fetchHallDataStart();
    setReservationMovieId(movieId);
    history.push(`/seat-reservation/${screeningId}`);
  };

  const canChooseSeat = activeDate && activeHour ? true : false;

  return (
    <div className="screening-dates-container">
      {dates ? (
        <>
          <ScreeningDates
            screeningDates={dates}
            activeDateIndex={activeDateIndex}
            onClick={setActiveDate}
          />
          <ScreeningHours
            screeningDate={dates[activeDateIndex]}
            activeHourIndex={activeHourIndex}
            onClick={setActiveHour}
          />
        </>
      ) : (
        <LoaderSpinner />
      )}
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

const mapStateToProps = (state: IRootState, ownProps: IProps) => ({
  dates: selectMovieScreeningDates(ownProps.movieId)(state),
  screeningId: selectReservationScreeningId(state),
});

const mapDispatchToProps = {
  resetSelectedSeats,
  fetchHallDataStart,
  setReservationMovieId,
};

export default connect(
  mapStateToProps,
  mapDispatchToProps
)(ScreeningDatesContainer);
