import z from "zod";
import { MovieSchema } from "../movies/types";

export const FavoritesMoviesSchema = z.array(MovieSchema);

export type TFavoritesMovies = z.infer<typeof FavoritesMoviesSchema>;