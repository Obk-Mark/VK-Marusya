import z from "zod";

type RegisterFormProps = {
    setAuthState: (state: "login" | "register"| "registered") => void;
}

const RegisterFormSchema = z.object({
    email: z.email(),
    name: z.string().min(3),
    surname: z.string().min(3),
    password: z.string().min(8),
    repeatPassword: z.string().min(1)
}).refine(
    (data) => data.password === data.repeatPassword,
    {
        message: "Пароли не совпадают",
        path: ["repeatPassword"]
    }
);

type TRegisterForm = z.infer<typeof RegisterFormSchema>;

export {
    RegisterFormSchema,
}

export type {
    TRegisterForm,
    RegisterFormProps
}