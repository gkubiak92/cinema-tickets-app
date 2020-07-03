import { IMoviesList } from "../../components/MoviesList/types";

export interface IHomePageProps {
  newMovies: IMoviesList;
  popularMovies: IMoviesList;
  upcomingMovies: IMoviesList;
  isFetchingMovies: boolean;
}
