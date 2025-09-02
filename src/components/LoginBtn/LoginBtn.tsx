import { useNavigate } from "react-router-dom";
import { useAuthFormOpen } from "../../hooks/useAuthFormOpen";
import { useAppSelector } from "../../store";
import { Button } from "../Button/Button";
import "./LoginBtn.scss";

export const LoginBtn = () => {
    const { toggleAuthForm } = useAuthFormOpen();
    const { isUserLogin } = useAppSelector((state) => state.user);
    const navigate = useNavigate();
    const changeUrl = (newUrl: string): void => {
        navigate(newUrl)
    };

    return (
        <>
            <button className="login-btn--desktop" type="button" onClick={toggleAuthForm}>Войти</button>
            <Button
                classNames="login-btn--mobile btn--icon btn--icon-no-padding"
                ariaLabel="Вход в аккаунт"
                icon={{
                    name: "user-icon",
                    width: 24,
                    height: 24
                }}
                handleClick={
                    isUserLogin ? (
                        () => changeUrl("/profile/favorites")
                    ) : toggleAuthForm}
            />
        </>
    )
}