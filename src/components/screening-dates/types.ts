export interface IScreeningDate {
  date: string;
  hours: string[];
}

export interface IScreeningDatesContainerProps {
  movieId: string;
  screeningDates?: IScreeningDate[] | null;
}

export interface IScreeningDatesProps {
  screeningDates?: IScreeningDate[] | null;
  activeDateIndex: number;
  onClick: Function;
}

export interface IScreeningHoursProps {
  screeningDate: IScreeningDate;
}
