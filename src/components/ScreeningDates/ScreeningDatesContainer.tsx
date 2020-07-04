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
import { fetchHallDataStart } from "redux/reservation/actions";

const ScreeningDatesContainer = ({
  movie,
  resetSelectedSeats,
  fetchSeatArrangementStart,
  dates,
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
    fetchSeatArrangementStart();
    history.push(`/seat-reservation/${movie.id}`);
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
  dates: selectMovieScreeningDates(ownProps.movie.id)(state),
});

const mapDispatchToProps = {
  resetSelectedSeats,
  fetchSeatArrangementStart: fetchHallDataStart,
};

export default connect(
  mapStateToProps,
  mapDispatchToProps
)(ScreeningDatesContainer);
