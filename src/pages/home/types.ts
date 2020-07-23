import { IMoviesList } from "../movies/components/MoviesList/types";
import { fetchMoviesStart } from "redux/movies/actions";

export type IMappedActions = {
  fetchMoviesStart: typeof fetchMoviesStart;
}

export type IHomePageProps = {
  newMovies: IMoviesList;
  popularMovies: IMoviesList;
  upcomingMovies: IMoviesList;
  isFetchingMovies: boolean;
}
