import { IMovie } from "api/types";

export type IMoviesList = IMovie[];

export interface IMoviesListProps {
  movies: IMoviesList;
}
