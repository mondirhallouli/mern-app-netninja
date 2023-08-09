import useAuthContext from "./useAuthContext";

export default function useLogout() {
    const { dispatch } = useAuthContext()

    const logout = () => {
        // delete the user entry from the local storage on browser
        localStorage.removeItem('user')
        // update the global user context
        dispatch({ type: 'LOGOUT' })
    }

    return { logout }
}