import { Swiper, SwiperSlide } from "swiper/react";
import "swiper/css";
import { MovieListItem } from "../MoviesListItem/MoviesListItem";
import { MoviesListProps } from "./types";
import './MoviesList.scss'

export const MoviesList = ({ type, data: moviesList }: MoviesListProps) => {
    if (!moviesList || moviesList.length === 0) {
        return (
            type === 'favorites' ? (
                <span className="empty-list-text">Список пуст</span>
            ) : (
                <span className="empty-list-text">Произошла ошибка</span>
            )
        );
    }

    if (type === 'genresPage') {
        return (
            <>
                <ul className={`movies-list--genres-page`}>
                    {moviesList.map((movie, index) => (
                        <li className="movies-list__item" key={movie.id}>
                            <MovieListItem type={type} movie={movie} index={index} />
                        </li>
                    ))}
                </ul>
            </>
        )
    }

    return (
        <>
            {/* Desktop */}
            <ul className={`movies-list--desktop movies-list--${type}`}>
                {moviesList.map((movie, index) => (
                    <li className="movies-list__item" key={movie.id}>
                        <MovieListItem type={type} movie={movie} index={index} />
                    </li>
                ))}
            </ul>

            {/* Mobile */}
            <div className={`movies-list--mobile movies-list--${type}`}>
                <Swiper
                    spaceBetween={40}
                    slidesPerView={'auto'}
                    className="movies-list__swiper"
                >
                    {moviesList.map((movie, index) => (
                        <SwiperSlide
                            className="movies-list__slide"
                            key={movie.id}
                            style={{
                                width: "224px",
                                overflow: "visible"
                            }}
                        >
                            <MovieListItem type={type} movie={movie} index={index} />
                        </SwiperSlide>
                    ))}
                </Swiper>
            </div>
        </>
    )
}