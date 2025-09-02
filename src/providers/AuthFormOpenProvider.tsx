import { useState } from "react";
import { AuthFormOpenContext } from "../contexts/AuthFormOpenContext/AuthFormOpenContext";
import type { ProviderProps } from "./types";

export const AuthFormOpenProvider = ({ children }: ProviderProps) => {
  const [isAuthFormOpen, setIsOpen] = useState(false);

  const toggleAuthForm = () => setIsOpen((prev) => !prev);

  return (
    <AuthFormOpenContext.Provider value={{ isAuthFormOpen, toggleAuthForm }} >
      {children}
    </AuthFormOpenContext.Provider>
  );
}