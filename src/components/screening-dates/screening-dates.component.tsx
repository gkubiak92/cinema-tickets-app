import React, { useState } from "react";
import "./screening-dates.styles.scss";
import { IScreeningDatesProps } from "./types";
import { IRootState } from "redux/types";
import { selectMovieScreeningDates } from "redux/movies/movies.selectors";
import { connect } from "react-redux";

const locale = "pl-PL";

const ScreeningDates = ({ movieId, screeningDates }: IScreeningDatesProps) => {
  const [activeDate, setActiveDate] = useState(0);

  return (
    <>
      <div className="screening-dates">
        {screeningDates?.map((screeningDate, index) => {
          const date = new Date(screeningDate.date);
          const weekday = date.toLocaleDateString(locale, { weekday: "short" });
          const dayNumber = date.toLocaleDateString(locale, { day: "2-digit" });
          const month = date.toLocaleDateString(locale, { month: "short" });
          return (
            <div
              key={index}
              onClick={() => setActiveDate(index)}
              className={`screening-date ${
                index === activeDate ? "active" : ""
              } `}
            >
              <p className="day-of-week">{weekday}</p>
              <p className="day-number">{dayNumber}</p>
              <p className="month">{month}</p>
            </div>
          );
        })}
      </div>

      <div className="screening-hours">
        {screeningDates![activeDate].hours.map((hour, index) => (
          <div key={index} className="screening-hour">
            <span>{hour}</span>
          </div>
        ))}
      </div>
    </>
  );
};

const mapStateToProps = (
  state: IRootState,
  ownProps: IScreeningDatesProps
) => ({
  screeningDates: selectMovieScreeningDates(ownProps.movieId)(state),
});

export default connect(mapStateToProps)(ScreeningDates);
