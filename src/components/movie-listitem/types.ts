export interface IMovie {
  id: string,
  description: string;
  director: string;
  genres: string[];
  isNew: boolean;
  isPopular: boolean;
  isUpcoming: boolean;
  stars: string[];
  thumbnailUrl: string;
  title: string;
  writer: string;
}

export interface IMovieProps {
  movie: IMovie;
}
