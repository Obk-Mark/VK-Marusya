import { fetchTopTenMovies } from "../../api/movies/movies";
import { Container } from "../Container/Container";
import { Loader } from "../Loader/Loader";
import { MoviesList } from "../MoviesList/MoviesList";
import "./TopTenMovies.scss";
import { useQuery } from "@tanstack/react-query";

export const TopTenMovies = () => {
    const { data: movies, isLoading, isFetching } = useQuery({
        queryFn: () => fetchTopTenMovies(),
        queryKey: ["movies", "top10"]
    });

    return (
        <section className="top-movies">
            <Container>
                <div className="top-movies__wrapper">
                    <h2 className="top-movies__title">Топ 10&nbsp;фильмов</h2>
                    {isLoading || isFetching ? (
                        <Loader />
                    ) : (
                        <MoviesList type="top10" data={movies} />
                    )}
                </div>
            </Container>
        </section>
    )
}