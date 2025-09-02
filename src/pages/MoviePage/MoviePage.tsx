import { useParams } from "react-router-dom"
import { Container } from "../../components/Container/Container";
import { useQuery } from "@tanstack/react-query";
import { fetchMovie } from "../../api/movies/movies";
import { MovieCard } from "../../components/MovieCard/MovieCard";
import "./MoviePage.scss";
import { MovieDescription } from "../../components/MovieDescription/MovieDescription";

const MoviePage = () => {
    const { movieId } = useParams();

    const { data: movie } = useQuery({
        queryFn: () => fetchMovie(movieId || ""),
        queryKey: ["movie", movieId],
        enabled: !!movieId,
    });

    return (
        <section className="movie-page">
            <Container>
                <div className="movie-page__wrapper">
                    {movie ? (
                        <>
                            <MovieCard movie={movie} cardType="moviePage" />
                            <MovieDescription movie={movie} />
                        </>
                    ) : (
                        <div>Фильм не найден</div>
                    )}
                </div>
            </Container>
        </section>
    )
}

export default MoviePage;