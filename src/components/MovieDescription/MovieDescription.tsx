import { TMovie } from "../../api/movies/types"
import './MovieDescription.scss'

type MovieDescriptionProps = {
    movie: TMovie;
}

export const MovieDescription = ({ movie }: MovieDescriptionProps) => {
    return (
        <div className="movie-description">
            <h2 className="movie-description__title">
                О фильме
            </h2>
            <ul className="movie-description__list">
                <li className="movie-description__item">
                    <span className="movie-description__item-column">
                        <span className="movie-description__label">Язык оригинала</span>
                        <span className="movie-description__dots"></span>
                    </span>
                    <span className="movie-description__value">{movie.language}</span>
                </li>
                {movie.budget &&
                    <li className="movie-description__item">
                        <span className="movie-description__item-column">
                            <span className="movie-description__label">Бюджет</span>
                            <span className="movie-description__dots"></span>
                        </span>
                        <span className="movie-description__value">{movie.budget}</span>
                    </li>
                }
                {movie.revenue &&
                    <li className="movie-description__item">
                        <span className="movie-description__item-column">
                            <span className="movie-description__label">Выручка</span>
                            <span className="movie-description__dots"></span>
                        </span>
                        <span className="movie-description__value">{movie.revenue}</span>
                    </li>
                }
                {movie.director &&
                    <li className="movie-description__item">
                        <span className="movie-description__item-column">
                            <span className="movie-description__label">Режиссёр</span>
                            <span className="movie-description__dots"></span>
                        </span>
                        <span className="movie-description__value">{movie.director}</span>
                    </li>
                }
                {movie.production &&
                    <li className="movie-description__item">
                        <span className="movie-description__item-column">
                            <span className="movie-description__label">Продакшен</span>
                            <span className="movie-description__dots"></span>
                        </span>
                        <span className="movie-description__value">{movie.production}</span>
                    </li>
                }
                <li className="movie-description__item">
                    <span className="movie-description__item-column">
                        <span className="movie-description__label">Награды</span>
                        <span className="movie-description__dots"></span>
                    </span>
                    <span className="movie-description__value">{movie.status}</span>
                </li>
            </ul>
        </div>
    )
}