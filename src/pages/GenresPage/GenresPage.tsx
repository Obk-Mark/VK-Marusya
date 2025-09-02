import { useQuery } from "@tanstack/react-query"
import { Container } from "../../components/Container/Container"
import { GenresList } from "../../components/GenresList/GenresList"
import { fetchGenres } from "../../api/movies/movies"
import { getGenreObject } from "../../api/GenreConverter"

const GenresPage = () => {
    const { data } = useQuery({
        queryFn: fetchGenres,
        queryKey: ['movie', 'genres']
    });

    const genres = data?.map(genre => getGenreObject(genre));

    return (
        <section className="section genres-page">
            <Container>
                <div className="section__wrapper genres-page__wrapper">
                    <h2 className="section__title genres-page__title">Жанры фильмов</h2>
                    <GenresList genres={genres} />
                </div>
            </Container>
        </section>
    )
}

export default GenresPage;