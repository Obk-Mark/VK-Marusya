import { API_BASE_URL } from "../API_BASE_URL";
import { validateResponse } from "../validateResponse";
import { MovieSchema, TMovie, TMoviesArray, MoviesArraySchema, TFetchGenres } from "./types";

type FetchMoviesProps = {
    count?: number;
    page?: number;
    title?: string;
    genre?: string;
}

const fetchMovies = ({count = 50, page, title, genre}: FetchMoviesProps = {}): Promise<TMoviesArray> => {
    const params = new URLSearchParams();
    if (count) params.append('count', count.toString());
    if (page) params.append('page', page.toString());
    if (title) params.append('title', title);
    if (genre) params.append('genre', genre);
    
    return fetch(`${API_BASE_URL}/movie?${params.toString()}`, {
        method: 'GET',
        headers: {
            "Content-Type": "application/json"
        }
    })
    .then(validateResponse)
    .then(res => res.json())
    .then(data => MoviesArraySchema.parse(data));
}

const fetchRandomMovie = (): Promise<TMovie> => {
    return fetch(`${API_BASE_URL}/movie/random`)
        .then(validateResponse)
        .then(res => res.json())
        .then(data => MovieSchema.parse(data));
}

const fetchTopTenMovies = (): Promise<TMoviesArray> => {
    return fetch(`${API_BASE_URL}/movie/top10`)
        .then(validateResponse)
        .then(res => res.json())
        .then(data => MoviesArraySchema.parse(data));
};

const fetchMovie = (id: string): Promise<TMovie> => {
    return fetch(`${API_BASE_URL}/movie/${id}`)
        .then(validateResponse)
        .then(res => res.json())
        .then(data => MovieSchema.parse(data));
}

const fetchGenres = (): Promise<TFetchGenres> => {
    return fetch(`${API_BASE_URL}/movie/genres`)
        .then(validateResponse)
        .then(res => res.json());
}

export {
    fetchMovies,
    fetchRandomMovie,
    fetchTopTenMovies,
    fetchMovie,
    fetchGenres
};