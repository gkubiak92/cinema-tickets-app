import React, { useState } from "react";
import './styles.scss';
import { IProps, IMappedActions, IMappedState, ActiveDate, ActiveHour } from "./types";
import { connect } from "react-redux";
import ScreeningDates from "./ScreeningDates/ScreeningDates";
import ScreeningHours from "./ScreeningHours/ScreeningHours";
import CustomButton from "components/CustomButton/CustomButton";
import { resetSelectedSeats } from "redux/reservation/actions";
import { useHistory } from "react-router-dom";
import { IRootState } from "redux/types";
import { selectMovieScreeningDates } from "redux/screenings/selectors";
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
  const [activeDate, setActiveDate] = useState({
    date: "",
    index: null,
  } as ActiveDate);
  const [activeHour, setActiveHour] = useState({
    hour: "",
    index: null,
  } as ActiveHour);
  const history = useHistory();

  const handleButtonClick = () => {
    resetSelectedSeats();
    fetchHallDataStart();
    setReservationMovieId(movieId);
    history.push(`/seat-reservation/${screeningId}`);
  };

  const canChooseSeat = activeDate.date && activeHour.hour ? true : false;

  return (
    <div className="screening-dates-container">
      {dates ? (
        <>
          <ScreeningDates
            screeningDates={dates}
            activeDateIndex={activeDate.index}
            onClick={setActiveDate}
          />
          {
            activeDate.index !== null && (<ScreeningHours
              screeningDate={dates[activeDate.index]}
              activeHourIndex={activeHour.index}
              onClick={setActiveHour}
            />)
          }
        </>
      ) : (
          <p className="no-screenings-info">There are no screening dates yet</p>
        )}
      <CustomButton
        type="button"
        block
        onClick={handleButtonClick}
        disabled={!canChooseSeat}>
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
