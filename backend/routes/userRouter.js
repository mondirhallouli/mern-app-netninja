import express from 'express'
// user model for mongoose
import User from '../models/userModel.js'

// userRouter
const userRouter = express.Router()

// login
userRouter.post('/login', (req, res) => {
    res.json({ msg: 'user logged in successfully' })
})

// signup
userRouter.post('/signup', (req, res) => {
    res.json({ msg: 'user signed up successfully' })
})

export default userRouter