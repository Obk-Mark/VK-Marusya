import "./RandomMovie.scss";
import { Container } from "../Container/Container";
import { Loader } from "../Loader/Loader";
import { MovieCard } from "../MovieCard/MovieCard";
import { useAppSelector } from "../../store";
import { useRandomMovieQuery } from "../../hooks/useRandomMovieQuery";
import { motion } from "framer-motion";

export const RandomMovie = () => {
    useRandomMovieQuery();
    const { data: movie, isLoading, isFetching } = useAppSelector((state) => state.randomMovie);

    return (
        <section className="random-movie">
            <Container>
                <div className="random-movie__wrapper">
                    <motion.div
                        initial={{ opacity: 0 }}
                        animate={{ opacity: 1 }}
                        transition={{ duration: 0.3 }}
                        key={movie?.id || 'loading'} // Меняем ключ при смене фильма
                    >
                        {isLoading || isFetching ? (
                            <Loader />
                        ) : (
                            movie ? (
                                <MovieCard movie={movie} cardType={"mainPage"} />
                            ) : (
                                <span className="fetch-error-text">Произошла ошибка</span>
                            )
                        )}
                    </motion.div>
                </div>
            </Container>
        </section>
    )
}