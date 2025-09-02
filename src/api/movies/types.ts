import z from "zod";

const MovieSchema = z.object({
    id: z.number(),
    title: z.string(),
    originalTitle: z.string(),
    language: z.string(),
    releaseYear: z.union([z.number(), z.string(), z.null()]),
    releaseDate: z.union([z.string(), z.null()]),
    genres: z.array(z.string()),
    plot: z.string(),
    runtime: z.number(),
    budget: z.union([z.number(), z.string(), z.null()]),
    revenue: z.union([z.number(), z.string(), z.null()]),
    homepage: z.string(),
    status: z.string(),
    posterUrl: z.union([z.string(), z.undefined(), z.null()]),
    backdropUrl: z.union([z.string(), z.undefined(), z.null()]),
    trailerUrl: z.string(),
    trailerYouTubeId: z.string(),
    tmdbRating: z.number(),
    searchL: z.string(),
    keywords: z.array(z.unknown()),
    countriesOfOrigin: z.array(z.unknown()),
    languages: z.array(z.unknown()),
    cast: z.array(z.unknown()),
    director: z.union([z.string(), z.null()]),
    production: z.union([z.string(), z.null()]),
    awardsSummary: z.union([z.string(), z.null()])
});

type TMovie = z.infer<typeof MovieSchema>;

const MoviesArraySchema = z.array(MovieSchema);

type TMoviesArray = z.infer<typeof MoviesArraySchema>;

// Genres
type TFetchGenres = string[];

const GenreObjectSchema = z.object({
    originName: z.string(),
    name: z.string(),
    image: z.string(),
});

type TGenreObject = z.infer<typeof GenreObjectSchema>;

const GenresArraySchema = z.array(GenreObjectSchema);

type TGenresArray = z.infer<typeof GenresArraySchema>

export {
    MovieSchema,
    MoviesArraySchema
};

export type {
    TMovie,
    TMoviesArray,
    TFetchGenres,
    TGenresArray,
    TGenreObject
}