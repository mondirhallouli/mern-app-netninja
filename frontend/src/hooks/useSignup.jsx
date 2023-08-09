import { useState } from "react";
import useAuthContext from "./useAuthContext"

export default function useSignup() {
    const [error, setError] = useState(null)
    const [loading, setLoading] = useState(false)
    const { dispatch } = useAuthContext()

    const signup = async (email, password) => {

        // start showing the login state
        setLoading(true)
        // reset the error state
        setError(null)

        // make a post request to the api
        const response = await fetch('http://localhost:3000/api/user/signup', {
            method: 'POST',
            headers: { "Content-Type": "application/json" },
            body: JSON.stringify({ email, password })
        })
        // get the data from the response
        const json = await response.json()

        // if the request returns a valid response 
        if (!response.ok) {
            setError(json.error)
            setLoading(false)
        }

        if (response.ok) {
            // save user to local storage
            localStorage.setItem('user', JSON.stringify(json))

            // then save the response to the auth context
            dispatch({ type: 'LOGIN', payload: json })

            setError(null)
            setLoading(false)
        }
    }

    return { signup, loading, error }
}