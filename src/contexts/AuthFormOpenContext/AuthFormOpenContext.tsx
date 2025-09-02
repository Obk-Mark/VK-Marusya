import { createContext } from "react";
import type { IAuthFormOpenContext } from "./types";

export const AuthFormOpenContext = createContext<IAuthFormOpenContext | undefined>(undefined);
