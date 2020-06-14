export interface IMovie {
  id: string;
  description: string;
  director: string;
  genres: string[];
  isNew: boolean;
  isPopular: boolean;
  isUpcoming: boolean;
  photosUrl: string[];
  screeningDates: IScreeningDate[];
  stars: string[];
  thumbnailUrl: string;
  ticketPrice: number;
  title: string;
  rating: number;
  writer: string;
}

export interface IScreeningDate {
  date: string;
  hoursAndHalls: IHourAndHall[];
}

export interface IHourAndHall {
  hour: string;
  hallId: string;
}

export interface IMovieProps {
  movie: IMovie;
}
