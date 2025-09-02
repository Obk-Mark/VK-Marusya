import { NavLink } from "react-router-dom";
import { TGenreObject } from "../../api/movies/types"
import "./GenreCard.scss";

type GenreCardProps = {
    genre: TGenreObject;
}

export const GenreCard = ({ genre }: GenreCardProps) => {
    return (
        <NavLink className="genre-card" to={`/genres/${genre.originName}`}>
            <div className="genre-card__wrapper">
                <picture className="genre-card__img">
                    <source srcSet={`${genre.image}@2x.webp 2x, ${genre.image}.webp 1x`} type="image/webp" />
                    <source srcSet={`${genre.image}@2x.jpg 2x, ${genre.image}.jpg 1x`} type="image/jpeg" />
                    <img src={`${genre.image}.jpg`} alt={genre.originName} />
                </picture>
                <span className="genre-card__name">{genre.name}</span>
            </div>
        </NavLink>
    )
}