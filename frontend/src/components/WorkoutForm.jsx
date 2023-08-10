import { useState } from "react"
import useWorkoutsContext from "../hooks/useWorkoutsContext"
import useAuthContext from "../hooks/useAuthContext"

export default function WorkoutForm() {
    const { dispatch } = useWorkoutsContext()
    const { user } = useAuthContext()

    const [title, setTitle] = useState('')
    const [reps, setReps] = useState('')
    const [weight, setWeight] = useState('')
    const [error, setError] = useState(null)
    const [emptyFields, setEmptyFields] = useState([])

    const handleSubmit = async (event) => {
        event.preventDefault()

        // check if the user is logged in first 
        if (!user) {
            setError('you have to be logged in first')
            return
        }

        const workout = { title, reps, weight }

        const response = await fetch('http://localhost:3000/api/workouts', {
            method: 'POST',
            headers: {
                "Content-Type": 'application/json',
                "Authorization": `Bearer ${user.token}`
            },
            body: JSON.stringify(workout),
        })

        const json = await response.json()

        if (!response.ok) {
            setError(json.error)
            setEmptyFields(json.emptyFields)
        }

        if (response.ok) {
            setTitle('')
            setReps('')
            setWeight('')
            setError(null)
            dispatch({ type: 'CREATE_WORKOUT', payload: json })
        }
    }

    return (
        <form className="create" onSubmit={handleSubmit}>
            <label>Excercise title</label>
            <input
                type="text"
                onChange={(event) => setTitle(event.target.value)}
                value={title}
                className={emptyFields.includes('title') ? 'error' : ''}
            />

            <label>Excercise reps</label>
            <input
                type="number"
                onChange={(event) => setReps(event.target.value)}
                value={reps}
                className={emptyFields.includes('reps') ? 'error' : ''}
            />

            <label>Excercise weight</label>
            <input
                type="number"
                onChange={(event) => setWeight(event.target.value)}
                value={weight}
                className={emptyFields.includes('weight') ? 'error' : ''}
            />

            <button type="submit">Create</button>

            {error && <div className="error">{error}</div>}
        </form>
    )
}