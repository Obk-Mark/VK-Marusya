import z from "zod";

const UserShema = z.object({
    favorites: z.array(z.string()),
    surname: z.string(),
    name: z.string(),
    email: z.string()
})

type IUser = z.infer<typeof UserShema>;


const LoginUserSchema = z.object({
    email: z.string(),
    password: z.string()
});

type ILoginUser = z.infer<typeof LoginUserSchema>

const RegisterUserSchema = z.object({
    email: z.string(),
    password: z.string(),
    name: z.string(),
    surname: z.string()
});

type IRegisterUser = z.infer<typeof RegisterUserSchema>

export {
    UserShema,
    LoginUserSchema,
    RegisterUserSchema
}

export type {
    ILoginUser,
    IRegisterUser,
    IUser
}