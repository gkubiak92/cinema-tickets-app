import { IMovie } from "../movie-listitem/types";

export interface IMoviesList {
  [key: string]: IMovie;
}

export interface IMoviesListProps {
  movies: IMoviesList;
}
