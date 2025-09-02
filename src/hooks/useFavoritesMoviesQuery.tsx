import { useQuery } from "@tanstack/react-query";
import { useAppDispatch } from "../store"
import { setFavorites, clearFavorites } from '../store/FavoritesSlice';
import { getFavorites } from "../api/favorites/favorites";

export const useFavoritesQuery = () => {
    const dispatch = useAppDispatch();

    return useQuery({
        queryFn: () => getFavorites().then(data => {
            dispatch(setFavorites(data));
            return data;
        }).catch(error => {
            dispatch(clearFavorites());
            throw error;
        }),
        queryKey: ['movies', 'favorites'],
        retry: false,
    });
};