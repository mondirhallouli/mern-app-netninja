// user model for mongoose
import User from "../models/userModel.js";
import jwt from 'jsonwebtoken'

// jwt secret
const jwtSecret = process.env.JWT_SECRET

// token creator function
function createToke(_id) {
    const token = jwt.sign({ _id }, jwtSecret, { expiresIn: "30m" })
    return token
}

// login user
export async function userLogin(req, res) {
    // extract user information from request's body
    const { email, password } = req.body
    // run the static login function inside a try...catch
    try {
        const user = await User.login(email, password)
        const token = createToke(user._id)
        // return a response
        res.json({ email, token })
    } catch (error) {
        // return an error
        res.status(400).json({ error: error.message })
    }
}

// signup user
export async function userSignup(req, res) {
    // extract user information from request's body
    const { email, password } = req.body
    // run the static signup function inside a try...catch
    try {
        const user = await User.signup(email, password)
        const token = createToke(user._id)
        // return a response
        res.json({ email, token })
    } catch (error) {
        // return an error
        res.status(400).json({ error: error.message })
    }
}