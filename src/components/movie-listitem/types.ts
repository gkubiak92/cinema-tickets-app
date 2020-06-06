export interface IMovie {
  id: string;
  description: string;
  director: string;
  genres: string[];
  isNew: boolean;
  isPopular: boolean;
  isUpcoming: boolean;
  photosUrl: string[];
  screeningDates: { date: string; hours: string[] }[];
  stars: string[];
  thumbnailUrl: string;
  ticketPrice: number;
  title: string;
  rating: number;
  writer: string;
}

export interface IMovieProps {
  movie: IMovie;
}
