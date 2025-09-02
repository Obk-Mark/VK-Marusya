import { TMoviesArray } from "../../api/movies/types"

export type MoviesListProps = {
    type: "favorites" | "top10" | "genresPage",
    data: TMoviesArray | undefined,
}