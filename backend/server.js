import 'dotenv/config'
import cors from 'cors'
import express from "express";
import workoutsRouter from './routes/workoutsRouter.js';
import mongoose from 'mongoose';
import userRouter from './routes/userRouter.js';

// env variables
const PORT = process.env.PORT

// express application
const app = express()

// mongoose db connection
mongoose.connect(process.env.MONGO_URI)
    .then(() => app.listen(PORT, () => console.log('server is live on port', PORT)))
    .catch(error => console.log(error.message))

// middleware
app.use(express.json())
app.use(cors())

app.use((req, res, next) => {
    console.log(`path: ${req.path}, method: ${req.method}`)
    next()
})

// workouts routes
app.use('/api/workouts', workoutsRouter)

// user routes
app.use('/api/user', userRouter)