import { TMovie } from "../../api/movies/types"
import './MovieDescription.scss'

type MovieDescriptionProps = {
    movie: TMovie;
}

export const MovieDescription = ({ movie }: MovieDescriptionProps) => {
    const movieLanguage = movie.language === "en" ? "Английский" : movie.language === "ru" ? "Русский" : movie.language;
    const movieBudget = movie.budget ? Number(movie.budget).toLocaleString('ru-RU').replace(/,/g, ' ') : null;
    const movieRevenue = movie.revenue ? Number(movie.revenue).toLocaleString('ru-RU').replace(/,/g, ' ') : null;

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
                    <span className="movie-description__value">{movieLanguage}</span>
                </li>
                {movie.budget &&
                    <li className="movie-description__item">
                        <span className="movie-description__item-column">
                            <span className="movie-description__label">Бюджет</span>
                            <span className="movie-description__dots"></span>
                        </span>
                        <span className="movie-description__value">{movieBudget} рублей</span>
                    </li>
                }
                {movie.revenue &&
                    <li className="movie-description__item">
                        <span className="movie-description__item-column">
                            <span className="movie-description__label">Выручка</span>
                            <span className="movie-description__dots"></span>
                        </span>
                        <span className="movie-description__value">{movieRevenue} рублей</span>
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
                {movie.awardsSummary &&
                    <li className="movie-description__item">
                        <span className="movie-description__item-column">
                            <span className="movie-description__label">Награды</span>
                            <span className="movie-description__dots"></span>
                        </span>
                        <span className="movie-description__value">{movie.awardsSummary}</span>
                    </li>
                }
            </ul>
        </div>
    )
}