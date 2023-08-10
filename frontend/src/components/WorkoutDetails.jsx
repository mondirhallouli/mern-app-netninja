import useAuthContext from "../hooks/useAuthContext"
import useWorkoutsContext from "../hooks/useWorkoutsContext"
import formatDistanceToNow from 'date-fns/formatDistanceToNow'

export default function WorkoutDetails({ workout }) {
    const { dispatch } = useWorkoutsContext()
    const { user } = useAuthContext()

    const handleClick = async (event) => {
        if (!user) return

        const response = await fetch(`http://localhost:3000/api/workouts/${workout._id}`, {
            method: 'DELETE',
            headers: {
                "Authorization": `Bearer ${user.token}`
            }
        })
        const json = await response.json()

        if (response.ok) {
            dispatch({ type: 'DELETE_WORKOUT', payload: json })
        }
    }

    return (
        <div className="workout-details">
            <h4>{workout.title}</h4>
            <p><strong>Reps: </strong>{workout.reps}</p>
            <p><strong>Weight (kg): </strong>{workout.weight}</p>
            <p>{formatDistanceToNow(new Date(workout.createdAt), { addSuffix: true })}</p>
            <span onClick={handleClick} className="material-symbols-outlined">delete</span>
        </div>
    )
}