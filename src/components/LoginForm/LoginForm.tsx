import { Button } from "../Button/Button";
import { FormField } from "../FormField/FormField";
import "../AuthForm/AuthForm.scss";
import { useForm } from "react-hook-form";
import { useMutation } from "@tanstack/react-query";
import { loginUser } from "../../api/auth/auth";
import { LoginFormProps, LoginFormSchrema, TLoginForm } from "./types";
import { zodResolver } from "@hookform/resolvers/zod";
import { useAuthFormOpen } from "../../hooks/useAuthFormOpen";
import { queryClient } from "../../api/queryClient";

export const LoginForm = ({ setAuthState }: LoginFormProps) => {
    const { toggleAuthForm } = useAuthFormOpen();

    const { register, handleSubmit, formState: { errors } } = useForm<TLoginForm>({
        resolver: zodResolver(LoginFormSchrema)
    });

    const loginMutaion = useMutation({
        mutationFn: loginUser,
        onSuccess: () => {
            toggleAuthForm();
            queryClient.invalidateQueries({queryKey: ["user", "profile"]});
        }
    })

    return (
        <>
            <form action="#" className="form" onSubmit={handleSubmit(({ email, password }) => {
                loginMutaion.mutate({ email, password });
            })}>
                <div className="form__inputs">
                    <FormField icon="mail-icon" isError={!!errors.email} >
                        <input type="text" placeholder="Электронная почта" {...register("email")} />
                    </FormField>
                    <FormField icon="key-icon" isError={!!errors.password} >
                        <input type="password" placeholder="Пароль" {...register("password")} />
                    </FormField>
                </div>

                {loginMutaion.error && <span style={{ color: "red" }}>{loginMutaion.error.message}</span>}

                <Button classNames="btn--blue btn--big" text="Войти" type="submit" />
            </form >
            <button className="auth-form__btn" onClick={() => setAuthState("register")}>Регистрация</button>
        </>
    )
}