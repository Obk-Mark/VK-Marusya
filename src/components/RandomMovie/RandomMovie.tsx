import "./RandomMovie.scss";
import { Container } from "../Container/Container";
import { Loader } from "../Loader/Loader";
import { MovieCard } from "../MovieCard/MovieCard";
import { useAppSelector } from "../../store";
import { useRandomMovieQuery } from "../../hooks/useRandomMovieQuery";

export const RandomMovie = () => {
    useRandomMovieQuery();
    const { data: movie, isLoading, isFetching } = useAppSelector((state) => state.randomMovie);

    return (
        <section className="random-movie">
            <Container>
                <div className="random-movie__wrapper">
                    {isLoading || isFetching ? (
                        <Loader />
                    ) : (
                        movie ? (
                            <MovieCard movie={movie} cardType={"mainPage"} />
                        ) : (
                            <span className="fetch-error-text">Произошла ошибка</span>
                        )
                    )}
                </div>
            </Container>
        </section>
    )
}