import "./RatingSpan.scss";

type RatingSpanProps = {
    rating: number;
    modified?: string;
}

export const RatingSpan = ({ rating, modified }: RatingSpanProps) => {
    const newRating = Math.round(rating * 10) / 10;
    let className = "rating-span "

    if (modified) {
        className += `rating-span--${modified} `;
    }

    if (newRating < 5) {
        className += "rating-span--red"
    } else if (newRating < 7) {
        className += "rating-span--gray"
    } else if (newRating < 8) {
        className += "rating-span--green"
    } else {
        className += "rating-span--yellow"
    }

    return (
        <span className={className}>
            <svg className="rating-span__icon">
                <use xlinkHref="/images/sprite.svg#star-icon" />
            </svg>
            <span className="rating-span__text">{newRating.toString().replace('.', ',')}</span>
        </span>
    )
}