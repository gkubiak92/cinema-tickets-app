import React, { useState } from "react";
import { IScreeningDatesContainerProps } from "./types";
import { IRootState } from "redux/types";
import { selectMovieScreeningDates } from "redux/movies/movies.selectors";
import { connect } from "react-redux";
import ScreeningDates from "./screening-dates.component";
import ScreeningHours from "./screening-hours.component";

const ScreeningDatesContainer = ({
  movieId,
  screeningDates,
}: IScreeningDatesContainerProps) => {
  const [activeDate, setActiveDate] = useState(0);

  return (
    <>
      <ScreeningDates
        screeningDates={screeningDates}
        activeDateIndex={activeDate}
        onClick={setActiveDate}
      />
      <ScreeningHours screeningDate={screeningDates![activeDate]} />
    </>
  );
};

const mapStateToProps = (
  state: IRootState,
  ownProps: IScreeningDatesContainerProps
) => ({
  screeningDates: selectMovieScreeningDates(ownProps.movieId)(state),
});

export default connect(mapStateToProps)(ScreeningDatesContainer);
