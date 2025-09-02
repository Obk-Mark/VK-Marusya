import "./FormField.scss";
import { FC } from "react";
import type { FormFieldProps } from "./types";

export const FormField: FC<FormFieldProps> = ({ children, icon, isError }) => {
    return (
        <div className={
            isError ? "custom-input custom-input--error" : "custom-input"
        }>
            <svg className="custom-input__icon">
                <use xlinkHref={`./images/sprite.svg#${icon}`} />
            </svg>
            {children}
        </div>
    )
}