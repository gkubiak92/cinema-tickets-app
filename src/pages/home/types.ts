import { IMoviesList } from "../../components/movies-list/types";

export interface IHomePageProps {
    newMovies: IMoviesList,
    popularMovies: IMoviesList,
    upcomingMovies: IMoviesList
}