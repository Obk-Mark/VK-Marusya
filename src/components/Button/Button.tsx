import type { ButtonProps } from "./types"
import "./Button.scss";

export const Button = ({ handleClick, classNames, text, icon, ariaLabel, type = "button" }: ButtonProps) => {
    return <button
        onClick={handleClick}
        className={`${classNames} btn`}
        aria-label={ariaLabel}
        type={type}
    >
        {text}
        {icon &&
            <svg className={icon.name} width={icon.width} height={icon.height} viewBox={`0 0 ${icon.width} ${icon.height}`}>
                <use xlinkHref={`/images/sprite.svg#${icon.name}`} />
            </svg>
        }
    </button>
}
