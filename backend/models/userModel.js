import mongoose from 'mongoose'

const Schema = mongoose.Schema

// user schema
const userSchema = new Schema({
    email: {
        type: String,
        required: true,
        unique: true,
    },
    password: {
        type: String,
        required: true,
    }
})

// user model
const User = mongoose.model('User', userSchema)

export default User