import { useMutation } from "@tanstack/react-query";
import { addFavoriteMovie, removeFavoriteMovie } from "../api/favorites/favorites";
import { queryClient } from "../api/queryClient";
import { useAppSelector } from "../store";

export const useFavoriteMovie = (id: string) => {
    const { data: movies } = useAppSelector((state) => state.favorites);
    const isFavorite = movies?.some((movie) => movie.id.toString() === id) || false;

    const addMutation = useMutation({
        mutationFn: () => addFavoriteMovie(id),
        onSuccess: () => {
            queryClient.invalidateQueries({ queryKey: ['movies', 'favorites'] });
        }
    });

    const removeMutation = useMutation({
        mutationFn: () => removeFavoriteMovie(id),
        onSuccess: () => {
            queryClient.invalidateQueries({ queryKey: ['movies', 'favorites'] });
        }
    });

    const toggleFavoriteMovie = () => {
        if (isFavorite) {
            removeMutation.mutate();
        } else {
            addMutation.mutate();
        }
    };

    return {
        toggleFavoriteMovie,
        isFavorite,
    };
};