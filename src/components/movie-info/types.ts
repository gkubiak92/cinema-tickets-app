import { IMovie } from "components/movie-listitem/types";

export interface IMovieInfoProps {
  movie: IMovie | null;
  date: string;
  hour: string;
}
