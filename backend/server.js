require('dotenv').config()
const cors = require('cors')
const express = require('express')
const mongoose = require('mongoose')
// const workoutRoutes = require('./routes/workouts')
const userRoutes = require('./routes/user')

// express app
const app = express()

// middleware
app.use(express.json())
app.use(cors())

app.use((req, res, next) => {
  console.log(req.path, req.method)
  next()
})

// routes
// app.use('/api/workouts', workoutRoutes)
app.use('/api/user', userRoutes)

// connect to db
mongoose.connect("mongodb+srv://cochack1:WebGenius123@cluster0.lqbklgm.mongodb.net/?retryWrites=true&w=majority&appName=Cluster0/Authentication")
  .then(() => {
    // listen for requests
    app.listen(process.env.PORT, () => {
      console.log('connected to db & listening on port', process.env.PORT)
    })
  })
  .catch((error) => {
    console.log(error)
  })