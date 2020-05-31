import { IMovie } from "../../components/movie-listitem/types";

export interface IMoviePageMatchParams {
    movieId: string
}

export interface IMoviePageState {
    movie: IMovie | null
}