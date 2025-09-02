import { API_BASE_URL } from "../API_BASE_URL";
import { MoviesArraySchema, TMoviesArray } from "../movies/types";
import { validateResponse } from "../validateResponse";

export const getFavorites = (): Promise<TMoviesArray> => {
    return fetch(`${API_BASE_URL}/favorites`, {
        credentials: 'include',
    })
        .then(validateResponse)
        .then(res => res.json())
        .then(data => MoviesArraySchema.parse(data));
}

export const addFavoriteMovie = (id: string): Promise<void> => {
    return fetch(`${API_BASE_URL}/favorites`, {
        method: "POST",
        headers: {
            "Content-Type": "application/json",
        },
        credentials: 'include',
        body: JSON.stringify({ id }),
    })
        .then(validateResponse)
        .then(() => undefined);
}

export const removeFavoriteMovie = (id: string): Promise<void> => {
    return fetch(`${API_BASE_URL}/favorites/${id}`, {
        method: "DELETE",
        headers: {
            'Content-Type': 'application/json',
        },
        credentials: "include"
    })
        .then(validateResponse)
        .then(() => undefined);
}