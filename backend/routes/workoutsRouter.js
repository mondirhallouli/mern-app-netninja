import express from 'express'
import {
    getWorkouts,
    getWorkoutDetails,
    createWorkout,
    updateWorkout,
    deleteWorkout,
} from '../controllers/workoutController.js'
import checkLogin from '../middleware/checkLogin.js'

// router
const workoutsRouter = express.Router()

// check login first
workoutsRouter.use(checkLogin)

// get all workouts 
workoutsRouter.get('/', getWorkouts)

// create workout
workoutsRouter.post('/', createWorkout)

// get single workout
workoutsRouter.get('/:id', getWorkoutDetails)

// update a workout
workoutsRouter.patch('/:id', updateWorkout)

// delete a workout
workoutsRouter.delete('/:id', deleteWorkout)

export default workoutsRouter