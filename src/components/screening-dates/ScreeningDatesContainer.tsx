import React, { useState } from "react";
import {
  IScreeningDatesContainerProps,
  IScreeningDatesContainerMappedDispatch,
  IscreeningDatesContainerMappedState,
} from "./types";
import { connect } from "react-redux";
import ScreeningDates from "./screening-dates/ScreeningDates";
import ScreeningHours from "./screening-hours/ScreeningHours";
import CustomButton from "components/custom-button/custombutton.component";
import { resetSelectedSeats } from "redux/reservation/actions";
import { useHistory } from "react-router-dom";
import { IRootState } from "redux/types";
import { selectMovieScreeningDates } from "redux/screenings/selectors";
import LoaderSpinner from "components/loader-spinner/loader-spinner.component";

const ScreeningDatesContainer = ({
  movie,
  resetSelectedSeats,
  dates,
}: IScreeningDatesContainerProps &
  IScreeningDatesContainerMappedDispatch &
  IscreeningDatesContainerMappedState) => {
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

const mapStateToProps = (
  state: IRootState,
  ownProps: IScreeningDatesContainerProps
) => ({
  dates: selectMovieScreeningDates(ownProps.movie.id)(state),
});

const mapDispatchToProps = {
  resetSelectedSeats,
};

export default connect(
  mapStateToProps,
  mapDispatchToProps
)(ScreeningDatesContainer);
