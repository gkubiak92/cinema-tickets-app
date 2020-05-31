import { IMoviesState } from "./movies/movies.types";
import { IUIState } from "./ui/ui.types";

export interface IRootState {
    movies: IMoviesState,
    ui: IUIState
}