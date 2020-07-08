import { fetchMovieScreeningsStart } from "redux/screenings/actions";
import { IMovie } from "api/types";

export interface IMoviePageMatchParams {
  movieId: string;
}

export interface IMoviePageMappedDispatch {
  fetchMovieScreeningsStart: typeof fetchMovieScreeningsStart;
}

export type IMoviePageProps = {
  movie: IMovie | null;
} & IMoviePageMappedDispatch;
