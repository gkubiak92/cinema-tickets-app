export interface IMovie {
  id: string;
  description: string;
  director: string;
  genres: string[];
  isNew: boolean;
  isPopular: boolean;
  isUpcoming: boolean;
  photosUrl: string[];
  screeningDates: ScreeningDate[];
  stars: string[];
  thumbnailUrl: string;
  ticketPrice: number;
  title: string;
  rating: number;
  writer: string;
}

export interface ScreeningDate {
  date: string;
  hours: string[];
  hallId: string;
}

export interface IMovieProps {
  movie: IMovie;
}
