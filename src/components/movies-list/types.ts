import { IMovie } from "../movie-listitem/types";

export type IMoviesList = IMovie[];

export interface IMoviesListProps {
  movies: IMoviesList;
}
