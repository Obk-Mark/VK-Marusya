import { useContext } from "react";
import { AuthFormOpenContext } from "../contexts/AuthFormOpenContext/AuthFormOpenContext";

export const useAuthFormOpen = () => {
  const context = useContext(AuthFormOpenContext);
  if (!context) {
    throw new Error("useAuthFormOpen must be used within AuthFormOpenProvider");
  }
  return context;
};