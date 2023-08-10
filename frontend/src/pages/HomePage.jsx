import { useEffect } from "react"
import WorkoutDetails from "../components/WorkoutDetails"
import WorkoutForm from "../components/WorkoutForm"
import useWorkoutsContext from "../hooks/useWorkoutsContext"
import useAuthContext from "../hooks/useAuthContext"

export default function HomePage() {
    const { workouts, dispatch } = useWorkoutsContext()
    const { user } = useAuthContext()

    useEffect(() => {
        const getWorkouts = async () => {
            const response = await fetch('http://localhost:3000/api/workouts', {
                headers: {
                    'Authorization': `Bearer ${user.token}`
                }
            })
            const json = await response.json()

            if (response.ok) {
                dispatch({ type: 'GET_WORKOUTS', payload: json })
            }
        }

        if (user) getWorkouts()

    }, [dispatch, user])

    return (
        <div className="home">
            <div className="workouts">
                {workouts && workouts.map((workout) => (
                    <WorkoutDetails workout={workout} key={workout._id} />
                ))}
            </div>
            <WorkoutForm />
        </div>
    )
}