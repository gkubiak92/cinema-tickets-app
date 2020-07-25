import { fetchMoviesStart } from "redux/movies/actions";
import { IMovie } from "api/types";

export type IMappedActions = {
  fetchMoviesStart: typeof fetchMoviesStart;
}

export type IHomePageProps = {
  newMovies: IMovie[];
  popularMovies: IMovie[];
  upcomingMovies: IMovie[];
  isFetchingMovies: boolean;
}
