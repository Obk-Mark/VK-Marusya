import { TMovie } from "../../api/movies/types"

export type MovieProps = {
    movie: TMovie;
    cardType: "mainPage" | "moviePage";
}