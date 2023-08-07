// user model for mongoose
import User from "../models/userModel.js";

// login user
export async function userLogin(req, res) {
    // extract info from request's body
    // run the static login function inside a try...catch block
    // return a response
}

// signup user
export async function userSignup(req, res) {
    // extract user information from request's body
    const { email, password } = req.body
    // run the static signup function inside a try...catch
    try {
        const user = await User.signup(email, password)
        // return a response
        res.json({ email, user })
    } catch (error) {
        // return an error
        res.status(400).json({ error: error.message })
    }
}