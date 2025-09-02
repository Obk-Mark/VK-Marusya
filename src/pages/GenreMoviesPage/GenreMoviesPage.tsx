import { NavLink, useParams } from "react-router-dom"
import { Container } from "../../components/Container/Container";
import { getRussianGenre } from "../../api/GenreConverter";
import './GenreMoviesPage.scss';
import { useQuery } from "@tanstack/react-query";
import { fetchMovies } from "../../api/movies/movies";
import { MoviesList } from "../../components/MoviesList/MoviesList";
import { useEffect, useState } from "react";
import { Button } from "../../components/Button/Button";
import { Loader } from "../../components/Loader/Loader";
import { TMoviesArray } from "../../api/movies/types";

const GenreMoviesPage = () => {
    const { genreName } = useParams();
    let russianGenreName = '';

    if (genreName) {
        russianGenreName = getRussianGenre(genreName);
    }

    const [page, setPage] = useState(1);
    const [allMovies, setAllMovies] = useState<TMoviesArray>([]);
    const moviesPerPage = 10;

    const { data, isLoading, isFetching } = useQuery({
        queryFn: () => fetchMovies({ 
            count: moviesPerPage, 
            page: page, 
            genre: genreName 
        }),
        queryKey: ["movies", genreName, page],
    });

    useEffect(() => {
        if (data) {
            setAllMovies(prev => [...prev, ...data]);
        }
    }, [data]);

    const handleShowMore = () => {
        setPage(prev => prev + 1);
    };

    const hasMoreMovies = data && data.length === moviesPerPage;

    return (
        <section className="section genre-movies-page">
            <Container>
                <div className="section__wrapper genre-movies-page__wrapper">
                    <NavLink className='genre-movies-page__back-link' to={'/genres'} >
                        <div className="genre-movies-page__back-icon">
                            <svg viewBox="0 0 14 22">
                                <use xlinkHref="/images/sprite.svg#back-arrow-icon" />
                            </svg>
                        </div>
                        <h2 className="section__title genre-movies-page__title">{russianGenreName}</h2>
                    </NavLink>
                    <MoviesList type="genresPage" data={allMovies} />
                    <div className="genre-movies-page__bottom-group">
                        {isLoading || isFetching ? (
                            <Loader />
                        ) : (
                            hasMoreMovies && (
                                <Button classNames="genre-movies-page__show-btn btn--blue" handleClick={handleShowMore} text="Показать ещё" />
                            )
                        )}
                    </div>  
                </div>
            </Container>
        </section>
    )
}

export default GenreMoviesPage;