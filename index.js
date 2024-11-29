const express = require('express')
const mongoose = require('mongoose')

//connectDB = require('./config')
require('dotenv').config()

const app = express()
const PORT = process.env.PORT || 5001
const MONGODB_CONNECTION_STRING = process.env.MONGODB_CONNECTION_STRING
//connectDB()

app.use (express.json())


app.listen(PORT, () => {
console.log(`listening on port: ${PORT}`)
})

mongoose.connect(MONGODB_CONNECTION_STRING)
.then(() => {
    console.log('Connected to DB!');
})
.catch (() => {
    console.log('Connection to DB failed!');
})