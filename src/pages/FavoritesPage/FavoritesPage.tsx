import { useEffect } from "react";
import { MoviesList } from "../../components/MoviesList/MoviesList";
import { useAppSelector } from "../../store";
import { queryClient } from "../../api/queryClient";

const FavoritesPage = () => {
    const { data: movies } = useAppSelector((state) => state.favorites);

    useEffect(() => {
        queryClient.invalidateQueries({queryKey: ['movies', 'favorites']})
    }, [])

    return (
        <MoviesList type="favorites" data={movies || undefined}/>
    )
}

export default FavoritesPage;