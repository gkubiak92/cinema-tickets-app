import React, { useState } from "react";
import { IScreeningDatesContainerProps } from "./types";
import { IRootState } from "redux/types";
import { selectMovieScreeningDates } from "redux/movies/movies.selectors";
import { connect } from "react-redux";
import ScreeningDates from "./screening-dates.component";
import ScreeningHours from "./screening-hours.component";
import Button from "components/button/button.component";

const ScreeningDatesContainer = ({
  movieId,
  screeningDates,
}: IScreeningDatesContainerProps) => {
  const [{ activeDate, activeDateIndex }, setActiveDate] = useState({
    activeDate: undefined,
    activeDateIndex: 0,
  });
  const [{ activeHour, activeHourIndex }, setActiveHour] = useState({
    activeHour: undefined,
    activeHourIndex: 0,
  });

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
      <Button
        text="Take a seat"
        type="block"
        to={`/seat-reservation/${movieId}`}
        disabled={!canChooseSeat}
      />
    </div>
  );
};

const mapStateToProps = (
  state: IRootState,
  ownProps: IScreeningDatesContainerProps
) => ({
  screeningDates: selectMovieScreeningDates(ownProps.movieId)(state),
});

export default connect(mapStateToProps)(ScreeningDatesContainer);
