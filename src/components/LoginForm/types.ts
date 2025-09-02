import z from "zod";

type LoginFormProps = {
    setAuthState: (state: "login" | "register"| "registered") => void;
}

const LoginFormSchrema = z.object({
    email: z.email(),
    password: z.string().min(8),
});
type TLoginForm = z.infer<typeof LoginFormSchrema>;

export {
    LoginFormSchrema,
}

export type {
    TLoginForm,
    LoginFormProps
}