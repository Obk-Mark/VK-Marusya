import { Button } from "../Button/Button";
import { FormField } from "../FormField/FormField";
import "../AuthForm/AuthForm.scss";
import { useForm } from "react-hook-form";
import { zodResolver } from "@hookform/resolvers/zod";
import { useMutation } from "@tanstack/react-query";
import { registerUser } from "../../api/auth/auth";
import { RegisterFormProps, RegisterFormSchema, TRegisterForm } from "./types";

export const RegisterForm = ({ setAuthState }: RegisterFormProps) => {
    const {register, handleSubmit, formState: { errors }} = useForm<TRegisterForm>({
        resolver: zodResolver(RegisterFormSchema)
    });

    const registerMutaion = useMutation({
        mutationFn: registerUser,
        onSuccess: () => {
            setAuthState("registered")
        }
    });

    return (
        <>
            <form action="#" className="form" onSubmit={handleSubmit(({ email, password, name, surname }) => {
                registerMutaion.mutate({ email, password, name, surname });
            })}>
                <h2 className="form__title">Регистрация</h2>
                <div className="form__inputs">
                    <FormField icon="mail-icon" isError={!!errors.email} >
                        <input placeholder="Электронная почта" type="text" {...register("email")} />
                    </FormField>
                    <FormField icon="user-icon" isError={!!errors.name} >
                        <input placeholder="Имя" type="text" {...register("name")} />
                    </FormField>
                    <FormField icon="user-icon" isError={!!errors.surname} >
                        <input placeholder="Фамилия" type="text" {...register("surname")} />
                    </FormField>
                    <FormField icon="key-icon" isError={!!errors.password} >
                        <input placeholder="Пароль" type="password" {...register("password")} />
                    </FormField>
                    <FormField icon="key-icon" isError={!!errors.repeatPassword} >
                        <input placeholder="Подтвердите пароль" type="password" {...register("repeatPassword")} />
                    </FormField>
                </div>

                {registerMutaion.error && <span style={{ color: "red" }}>{registerMutaion.error.message}</span>}

                <Button classNames="btn--blue btn--big" text="Создать аккаунт" type="submit" />
            </form>
            <button className="auth-form__btn" onClick={() => setAuthState("login")}>У меня есть пароль</button>
        </>
    )
}