import { IScreening } from "api/types";
import { IScreeningDates } from "./types";

/*
 * This metod converts array of objects to object with key value pairs
 * where key is movieId, and value is array of objects {date, arrayOfHours}
 * Its work both for fetching all screenings for all movies
 * and even if you fetch screenings for only one movie
 */
export const convertScreeningsCollection = (screenings: IScreening[]) => {
  const screeningDates: IScreeningDates = {};

  screenings.forEach((screening) => {
    const { dateAndHour, movieId, hallId } = screening;
    const dateObj = new Date(dateAndHour);
    const date = dateObj.toISOString().split("T")[0];
    const time = dateObj.toLocaleTimeString();
    //if movieID key doesn't exist in collection add this first entry
    if (!(movieId in screeningDates)) {
      screeningDates[movieId] = [];
      screeningDates[movieId].push({
        date: date,
        hoursAndHalls: [{ hour: time, hallId: hallId }],
      });
    } else {
      // if not check whether actual iterating row has the same date or not
      const theSameDateObj = screeningDates[movieId].find(
        (entry) => entry.date === date
      );
      if (theSameDateObj) {
        // if yes push another entry to hoursAndHalls
        theSameDateObj.hoursAndHalls.push({ hour: time, hallId: hallId });
      } else {
        // if not add another entry with different date
        screeningDates[movieId].push({
          date: date,
          hoursAndHalls: [{ hour: time, hallId: hallId }],
        });
      }
    }
  });

  return screeningDates;
};
