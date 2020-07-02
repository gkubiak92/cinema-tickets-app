import { IMovie } from "../../components/movie-listitem/types";
import { fetchScreeningsStart } from "redux/screenings/actions";

export interface IMoviePageMatchParams {
  movieId: string;
}

export interface IMoviePageMappedDispatch {
  fetchScreeningsStart: typeof fetchScreeningsStart;
}

export type IMoviePageProps = {
  movie: IMovie | null;
} & IMoviePageMappedDispatch;
