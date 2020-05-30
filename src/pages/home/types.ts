import { IMoviesList } from "../../components/movies-list/types";

export interface IHomePageState {
    newMovies: IMoviesList,
    popularMovies: IMoviesList,
    upcomingMovies: IMoviesList
}