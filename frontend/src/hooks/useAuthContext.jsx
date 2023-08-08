import { useContext } from "react";
import { AuthContext } from "../context/AuthContext";

export default function useAuthContext() {
    const context = useContext(AuthContext)

    if (!context) throw Error('useAuthContext can only be used inside an AuthContextProvider')

    return context
}