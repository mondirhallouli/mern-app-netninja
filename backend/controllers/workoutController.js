import Workout from "../models/workoutModel.js";
import mongoose from "mongoose";


// get all the workouts
export async function getWorkouts(req, res) {
    try {
        // get the user _id from the request given by the checkLogin function
        const user_id = req.user
        const response = await Workout.find({ user_id }).sort({ createdAt: -1 })
        res.json(response)
    } catch (error) {
        res.status(400).json({ error: error.message })
    }
}

// get a single workout
export async function getWorkoutDetails(req, res) {
    const { id } = req.params

    if (!mongoose.Types.ObjectId.isValid(id)) {
        return res.status(404).json({ message: 'Workout does not exist' })
    }

    try {
        const response = await Workout.find({ _id: id })
        res.json(response)
    } catch (error) {
        res.status(400).json({ error: error.message })
    }
}

// create a workout
export async function createWorkout(req, res) {
    const { title, reps, weight } = req.body

    const emptyFields = []

    if (!title) emptyFields.push('title')
    if (!reps) emptyFields.push('reps')
    if (!weight) emptyFields.push('weight')

    try {
        // get the user id from the request, set by the checkLogin middleware
        const user_id = req.user
        const response = await Workout.create({ title, reps, weight, user_id })
        res.json(response)
    } catch (error) {
        res.status(400).json({ error: "please fill all fields", emptyFields })
    }
}

// update a workout
export async function updateWorkout(req, res) {
    const { id } = req.params

    if (!mongoose.Types.ObjectId.isValid(id)) {
        return res.status(404).json({ message: 'Workout does not exist' })
    }

    try {
        const response = await Workout.findOneAndUpdate({ _id: id }, { ...req.body }, { new: true })
        res.json(response)
    } catch (error) {
        res.status(400).json({ error: error.message })
    }
}

// delete a workout
export async function deleteWorkout(req, res) {
    const { id } = req.params

    if (!mongoose.Types.ObjectId.isValid(id)) {
        return res.status(404).json({ message: 'Workout does not exist' })
    }

    try {
        const response = await Workout.findOneAndDelete({ _id: id })
        res.json(response)
    } catch (error) {
        res.status(400).json({ error: error.message })
    }
}