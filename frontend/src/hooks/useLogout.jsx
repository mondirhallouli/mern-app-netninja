import useAuthContext from "./useAuthContext";
import useWorkoutsContext from "./useWorkoutsContext"

export default function useLogout() {
    const { dispatch } = useAuthContext()
    const { dispatch: workoutsDispatch } = useWorkoutsContext()

    const logout = () => {
        // delete the user entry from the local storage on browser
        localStorage.removeItem('user')
        // update the global user context
        dispatch({ type: 'LOGOUT' })
        // clear the workouts context
        workoutsDispatch({ type: 'GET_WORKOUTS', payload: null })
    }

    return { logout }
}