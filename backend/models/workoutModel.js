import mongoose from "mongoose";

const Schema = mongoose.Schema

// workout schema
const workouSchema = new Schema({
    title: {
        type: String,
        required: true,
    },
    reps: {
        type: Number,
        required: true,
    },
    weight: {
        type: Number,
        required: true,
    },
    user_id: {
        type: String,
        required: true,
    },
}, { timestamps: true })

// workout model
const Workout = mongoose.model('Workout', workouSchema)

export default Workout