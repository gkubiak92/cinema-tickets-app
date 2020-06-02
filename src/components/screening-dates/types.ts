export interface IScreeningDate {
  date: string;
  hours: string[];
}

export interface IScreeningDatesProps {
  movieId: string;
  screeningDates?: IScreeningDate[] | null;
}
