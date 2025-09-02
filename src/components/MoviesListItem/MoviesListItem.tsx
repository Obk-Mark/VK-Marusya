import { Link } from "react-router-dom";
import { MoviesListItemProps } from "./types";
import './MoviesListItem.scss';
import { Button } from "../Button/Button";
import { useFavoriteMovie } from "../../hooks/useFavoriteMovie";

export const MovieListItem = ({ movie, type, index }: MoviesListItemProps) => {
    const { toggleFavoriteMovie } = useFavoriteMovie(movie.id.toString());

    return (
        <div className={`movies-list-item movies-list-item--${type}`}>
            <Link to={`/movie/${movie.id}`}
                className='movies-list-item__link'
            >

                {movie.posterUrl || movie.backdropUrl ? (
                    <img className="movies-list-item__img" src={movie.posterUrl || movie.backdropUrl || undefined} alt={movie.title} width={224} height={336} />
                ) : (
                    <span className="movies-list-item__placeholder">{movie.title}</span>
                )}
            </Link>
            {type === "top10" && (
                <span className="movies-list-item__index">{index + 1}</span>
            )}
            {type === "favorites" && (
                <div className="movies-list-item__close-btn-wrapper">
                    <Button
                        handleClick={toggleFavoriteMovie}
                        classNames="movies-list-item__close-btn btn--white btn--curcle"
                        icon={{
                            name: 'close-icon-small',
                            width: 14,
                            height: 14,
                        }}
                        ariaLabel="Удалить из избранного"
                    />
                </div>
            )
            }
        </div>
    )
}