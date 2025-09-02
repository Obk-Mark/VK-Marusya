import { TMoviesArray } from "../../api/movies/types"

export type SearchMovieResultsProps = {
    handleMovieSelect: (selectedMovieId: string) => void;
    searchResults: TMoviesArray;
}