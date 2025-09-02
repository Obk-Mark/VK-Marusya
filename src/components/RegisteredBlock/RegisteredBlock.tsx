import { Button } from "../Button/Button";
import "./RegisteredBlock.scss";
import { RegisteredBlockProps } from "./types";

export const RegisteredBlock = ({setAuthState}: RegisteredBlockProps) => {
    return (
        <div className="registered-block">
            <h2 className="registered-block__title">Регистрация завершена</h2>
            <p className="registered-block__descr">Используйте вашу электронную почту для входа</p>
            <Button classNames="btn--big btn--blue" text="Войти" handleClick={() => setAuthState("login")} />
        </div>
    )
}