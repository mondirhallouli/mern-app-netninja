import mongoose from 'mongoose'
import * as bcrypt from 'bcrypt'
import validator from 'validator'

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

// loginUser static method
userSchema.statics.signup = async function (email, password) {
    // user information validation
    // empty fields
    if (!email || !password) throw Error('all fields must be filled!')
    // true email
    if (!validator.isEmail(email)) throw Error('email is not valid!')
    // strong password
    if (!validator.isStrongPassword(password)) throw Error('password is not strong enough!')

    // check if the email already exists
    const exists = await this.findOne({ email })

    // throw an error if it exists
    if (exists) {
        throw Error('this email already exists')
    }

    // otherwise hash the password using bcrypt
    const hashSalt = await bcrypt.genSalt(10)
    const hashedPassword = await bcrypt.hash(password, hashSalt)

    // save the user to the db
    const user = await this.create({ email, password: hashedPassword })

    // return response's json
    return user
}

// user model
const User = mongoose.model('User', userSchema)

export default User