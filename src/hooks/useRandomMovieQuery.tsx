import { useQuery } from "@tanstack/react-query"
import { fetchRandomMovie } from "../api/movies/movies"
import { useAppDispatch } from "../store"
import { setRandomMovie } from "../store/RandomMovieSlice";
import { TMovie } from "../api/movies/types";
import { useEffect } from "react";

export const useRandomMovieQuery = () => {
    const dispatch = useAppDispatch();

    const query = useQuery<TMovie>({
        queryKey: ['movie', 'random'],
        queryFn: fetchRandomMovie
    });

    useEffect(() => {
        if (query.data) {
            dispatch(setRandomMovie({
                movie: query.data,
                isLoading: query.isLoading,
                isFetching: query.isFetching
            }));
        }
    }, [query.data, query.isLoading, query.isFetching, dispatch]);

    return query;
}