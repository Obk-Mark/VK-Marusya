import { NavLink } from "react-router-dom"
import { SearchMovieResultsProps } from "./types"
import { RatingSpan } from "../RatingSpan/RatingSpan"
import { getRussianGenre } from "../../api/GenreConverter"
import { Swiper, SwiperSlide } from "swiper/react"
import './SearchMovieResults.scss'

export const SearchMovieResults = ({ handleMovieSelect, searchResults }: SearchMovieResultsProps) => {
    return (
        <>
            <div className="search-movie-results search-movie-results--desktop">
                <ul className="search-movie-results__list">
                    {searchResults.map(movie => (
                        <li key={movie.id} className="search-movie-results__item">
                            <NavLink
                                to={`/movie/${movie.id}`}
                                className="search-movie-results__link"
                                onClick={() => handleMovieSelect(movie.id.toString())}
                            >
                                {movie.posterUrl || movie.backdropUrl ? (
                                    <img
                                        src={movie.posterUrl || movie.backdropUrl || undefined}
                                        alt={movie.title}
                                        className="search-movie-results__img"
                                        width={40}
                                        height={52}
                                    />
                                ) : (
                                    <picture className="search-movie-results__img">
                                        <source srcSet="/images/empty-poster@2x.webp 2x, /images/empty-poster.webp 1x" type="image/webp" />
                                        <source srcSet="/images/empty-poster@2x.jpg 2x, /images/empty-poster.jpg 1x" type="image/jpeg" />
                                        <img src="/images/empty-poster" alt={movie.title} />
                                    </picture>
                                )}

                                <div className="search-movie-results__content">
                                    <div className="search-movie-results__info">
                                        <RatingSpan rating={movie.tmdbRating} modified="very-small" />
                                        <span className="search-movie-results__info-span">{movie.releaseYear}</span>
                                        <span className="search-movie-results__info-span search-movie-results__info-span--genre">{getRussianGenre(movie.genres[0])}</span>
                                        <span className="search-movie-results__info-span">{
                                            movie.runtime % 60 === 0 ? (
                                                `${Math.floor(movie.runtime / 60)} ч`
                                            ) : (
                                                `${Math.floor(movie.runtime / 60)} ч ${movie.runtime % 60} мин`
                                            )
                                        }</span>
                                    </div>
                                    <span className="search-movie-results__title">{movie.title}</span>
                                </div>
                            </NavLink>
                        </li>
                    ))}
                </ul>
            </div>
            <div className="search-movie-results search-movie-results--mobile">
                <Swiper
                    spaceBetween={16}
                    slidesPerView={"auto"}
                    className="search-movie-results__swiper"
                >
                    {searchResults.map(movie => (
                        <SwiperSlide
                            style={{width: "220px"}}
                            className='search-movie-results__swiper-slide'
                            key={movie.id}
                        >
                            <NavLink
                                to={`/movie/${movie.id}`}
                                className="search-movie-results__link"
                                onClick={() => handleMovieSelect(movie.id.toString())}
                            >
                                {movie.posterUrl || movie.backdropUrl ? (
                                    <img
                                        className="search-movie-results__img"
                                        src={movie.posterUrl || movie.backdropUrl || undefined}
                                        alt={movie.title}
                                        width={158} height={206} />
                                ) : (
                                    <picture className="search-movie-results__img">
                                        <source srcSet="/images/empty-poster@2x.webp 2x, /images/empty-poster.webp 1x" type="image/webp" />
                                        <source srcSet="/images/empty-poster@2x.jpg 2x, /images/empty-poster.jpg 1x" type="image/jpeg" />
                                        <img src="/images/empty-poster" alt={movie.title} />
                                    </picture>
                                )}
                                <div className="search-movie-results__content">
                                    <div className="search-movie-results__info">
                                        <RatingSpan rating={movie.tmdbRating} modified="very-small" />
                                        <span className="search-movie-results__info-span">{movie.releaseYear}</span>
                                        <span className="search-movie-results__info-span search-movie-results__info-span--genre">{getRussianGenre(movie.genres[0])}</span>
                                        <span className="search-movie-results__info-span">{
                                            movie.runtime % 60 === 0 ? (
                                                `${Math.floor(movie.runtime / 60)} ч`
                                            ) : (
                                                `${Math.floor(movie.runtime / 60)} ч ${movie.runtime % 60} мин`
                                            )
                                        }</span>
                                    </div>
                                    <span className="search-movie-results__title">{movie.title}</span>
                                </div>
                            </NavLink>
                        </SwiperSlide>
                    ))}
                </Swiper>
            </div>
        </>
    )
}