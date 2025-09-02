import { API_BASE_URL } from "../API_BASE_URL";
import { validateResponse } from "../validateResponse";
import { ILoginUser, IRegisterUser, IUser, UserShema } from "./types";

const loginUser = (credentials: ILoginUser): Promise<void> => {
    return fetch(`${API_BASE_URL}/auth/login`, {
        method: "POST",
        headers: {
            "Content-Type": "application/json",
        },
        body: JSON.stringify(credentials),
        credentials: 'include',
    })
        .then(validateResponse)
        .then(() => undefined);
};

const logoutUser = (): Promise<void> => {
    return fetch(`${API_BASE_URL}/auth/logout`, {
        credentials: 'include',
    })
        .then(validateResponse)
        .then(() => undefined);
};

const registerUser = ({ email, password, name, surname }: IRegisterUser): Promise<void> => {
    return fetch(`${API_BASE_URL}/user`, {
        method: "POST",
        headers: {
            "Content-Type": "application/json",
        },
        body: JSON.stringify({ email, password, name, surname }),
        credentials: 'include',
    })
        .then(validateResponse)
        .then(() => undefined);
};

const getUser = (): Promise<IUser> => {
    return fetch(`${API_BASE_URL}/profile`, {
        credentials: 'include',
    })
        .then(validateResponse)
        .then(res => res.json())
        .then(data => UserShema.parse(data));
};

export {
    loginUser,
    logoutUser,
    registerUser,
    getUser
};