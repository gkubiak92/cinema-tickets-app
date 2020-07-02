import { fetchScreeningsStart } from "redux/screenings/actions";
import { IMovie } from "api/types";

export interface IMoviePageMatchParams {
  movieId: string;
}

export interface IMoviePageMappedDispatch {
  fetchScreeningsStart: typeof fetchScreeningsStart;
}

export type IMoviePageProps = {
  movie: IMovie | null;
} & IMoviePageMappedDispatch;
