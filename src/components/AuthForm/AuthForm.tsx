import "./AuthForm.scss";
import { LoginForm } from "../LoginForm/LoginForm";
import { RegisterForm } from "../RegisterForm/RegisterForm";
import { RegisteredBlock } from "../RegisteredBlock/RegisteredBlock";
import { useAuthFormOpen } from "../../hooks/useAuthFormOpen";
import { Button } from "../Button/Button";
import { useState } from "react";

export const AuthForm = () => {
    const { isAuthFormOpen } = useAuthFormOpen();

    const [authState, setAuthState] = useState<"login" | "register" | "registered">("login");
    const { toggleAuthForm } = useAuthFormOpen();

    const handleCloseBtnClick = () => {
        toggleAuthForm();
        setAuthState("login");
    }

    const renderForm = () => {
        switch (authState) {
            case "login":
                return <LoginForm setAuthState={setAuthState} />

            case "register":
                return <RegisterForm setAuthState={setAuthState} />

            case "registered":
                return <RegisteredBlock setAuthState={setAuthState} />
        }
    }

    if (!isAuthFormOpen) return null;

    return (
        <div className="auth-form">
            <div className="auth-form__block">
                <picture className="auth-form__logo">
                    <source srcSet="/images/logo--black@2x.webp 2x, /images/logo--black.webp 1x" type="image/webp" />
                    <source srcSet="/images/logo--black@2x.png 2x" type="image/png" />
                    <img src="/images/logo--black.png" />
                </picture>
                {renderForm()}
                <Button
                    classNames="btn--icon btn--white btn--curcle auth-form__close-btn"
                    handleClick={handleCloseBtnClick}
                    icon={{
                        name: "close-icon",
                        width: 24,
                        height: 24
                    }}
                />
            </div>
        </div>
    )
};