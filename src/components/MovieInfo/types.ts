import { IMovie } from "api/types";

export interface IMovieInfoProps {
  movie: IMovie | null;
  date: string;
  hour: string;
}
