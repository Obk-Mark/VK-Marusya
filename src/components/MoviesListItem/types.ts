import { TMovie } from "../../api/movies/types"

export type MoviesListItemProps = {
    movie: TMovie,
    type: "favorites" | "top10" | "genresPage",
    index: number,
}