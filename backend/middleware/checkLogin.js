import jwt from 'jsonwebtoken'
import User from '../models/userModel.js'

export default async function checkLogin(req, res, next) {
    // check if the req authorization header has token
    const { authorization } = req.headers

    if (!authorization) return res.status(400).json({ error: 'Authorization token required' })

    // compare the token with the one we have using the ueser id
    const token = authorization.split(' ')[1]
    try {
        // save the _id from the token
        const { _id } = jwt.verify(token, process.env.JWT_SECRET)
        // use the _id to find the user in the database and save his _id in the request
        req.user = await User.findOne({ _id }).select('_id')
        // move on to the next middleware / function
        next()
    } catch (error) {
        res.status(400).json({ error: 'Request is not authorized' })
    }
}