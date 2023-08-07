import express from 'express'
import { userLogin, userSignup } from '../controllers/userController.js'

// userRouter
const userRouter = express.Router()

// login
userRouter.post('/login', userLogin)

// signup
userRouter.post('/signup', userSignup)

export default userRouter