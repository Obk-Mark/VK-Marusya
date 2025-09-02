import "./MovieCard.scss";
import { MovieProps } from "./type"
import { getRussianGenre } from "../../api/GenreConverter";
import { queryClient } from "../../api/queryClient";
import { Button } from "../Button/Button";
import { useAppSelector } from "../../store";
import { useAuthFormOpen } from "../../hooks/useAuthFormOpen";
import { useFavoriteMovie } from "../../hooks/useFavoriteMovie";
import { useState } from "react";
import { TrailerWindow } from "../TrailerWindow/TrailerWindow";
import { RatingSpan } from "../RatingSpan/RatingSpan";
import { Link } from "react-router-dom";

export const MovieCard = ({ movie, cardType }: MovieProps) => {
    const { isUserLogin } = useAppSelector((state) => state.user);
    const { toggleAuthForm } = useAuthFormOpen();
    const { isFavorite, toggleFavoriteMovie } = useFavoriteMovie(movie.id.toString());

    const [isTrailerOpen, setTrailerOpen] = useState(false);
    const toggleTrailerOpen = () => {
        setTrailerOpen(prev => !prev)
    }


    const handleFavoritesBtn = () => {
        if (isUserLogin) {
            toggleFavoriteMovie();
        } else {
            toggleAuthForm();
        }
    }

    const refetchRandomFilm = () => {
        queryClient.invalidateQueries({ queryKey: ["movie", "random"] });
    };

    return (
        <div className={cardType === "moviePage" ? "movie-card" : "movie-card movie-card--main-page"}>
            <div className="movie-card__content">
                <div className="movie-card__info">
                    <RatingSpan rating={movie.tmdbRating} />
                    <span className="movie-card__info-span">{movie.releaseYear}</span>
                    <span className="movie-card__info-span">{getRussianGenre(movie.genres[0])}</span>
                    <span className="movie-card__info-span">{
                        movie.runtime % 60 === 0 ? (
                            `${Math.floor(movie.runtime / 60)} ч`
                        ) : (
                            `${Math.floor(movie.runtime / 60)} ч ${movie.runtime % 60} мин`
                        )
                    }</span>
                </div>
                <h2 className="section__title movie-card__title">{movie.title}</h2>
                <span className={cardType === "moviePage" ? "movie-card__descr" : "movie-card__descr movie-card__descr--cut"}>{movie.plot}</span>
                <div className="movie-card__actions">
                    <Button classNames="movie-card__trailer-btn btn--blue" text="Трейлер" handleClick={toggleTrailerOpen} />
                    {cardType === "mainPage" &&
                        <Link to={`/movie/${movie.id}`} className="movie-card__movie-link btn btn--montana" >О фильме</Link>
                    }
                    <Button
                        handleClick={handleFavoritesBtn}
                        classNames={
                            isFavorite ?
                                "btn--icon btn--night-rider btn--icon--liked" :
                                "btn--icon btn--night-rider btn--icon-white"
                        }
                        ariaLabel="Добавить в избранное"
                        icon={{
                            name: isFavorite ? "heart-icon-fill" : "heart-icon",
                            width: 24,
                            height: 24
                        }}
                    />
                    {cardType === "mainPage" &&
                        <Button
                            handleClick={refetchRandomFilm}
                            classNames="btn--icon btn--night-rider"
                            ariaLabel="Обновить фильм"
                            icon={{
                                name: "reload-icon",
                                width: 24,
                                height: 24
                            }}
                        />
                    }
                </div>
            </div>
            <div className={`movie-card__img-wrapper movie-card__img-wrapper--${cardType}`}>
                {movie.backdropUrl || movie.posterUrl ? (
                    <img
                        className="movie-card__img"
                        src={movie.backdropUrl || movie.posterUrl || undefined}
                        alt={`${movie.title} - Poster`}
                        width={680}
                        height={552}
                        loading="eager"
                    />
                ) : (
                    <picture className="movie-card__img">
                        <source srcSet="./images/empty-poster@2x.webp 2x, ./images/empty-poster.webp 1x" type="image/webp" />
                        <source srcSet="./images/empty-poster@2x.jpg 2x, ./images/empty-poster.jpg 1x" type="image/jpeg" />
                        <img src="./images/empty-poster" alt={movie.title} />
                    </picture>
                )
                }
            </div>
            {isTrailerOpen &&
                <TrailerWindow movieTitle={movie.title} trailerYouTubeId={movie.trailerYouTubeId} toggleTrailerOpen={toggleTrailerOpen} />
            }
        </div >
    )
}