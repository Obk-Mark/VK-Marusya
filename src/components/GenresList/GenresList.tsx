import { TGenresArray } from "../../api/movies/types"
import { GenreCard } from "../GenreCard/GenreCard";
import "./GenresList.scss";

interface GenresListProps {
    genres: TGenresArray | undefined;
}

export const GenresList = ({ genres }: GenresListProps) => {
    return (
        genres ? (
            <ul className="genres-list">
                {genres.map((genre, index) => (
                    <li key={index} className="genres-list__item">
                        <GenreCard genre={genre} />
                    </li>
                ))}
            </ul >
        ) : (
            <span className="empty-list-text">Список пуст</span>
        )
    )
}