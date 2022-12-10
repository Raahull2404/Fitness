const express = require('express')
const mongoose = require('mongoose')
const cors = require('cors')
const bodyparser = require('body-parser')
const app = express()

app.use(bodyparser.json())
app.use(bodyparser.urlencoded({ extended: false }))
mongoose.connect(process.env.MONGO_DB_URI, Options)
    .then(() => console.log('Connected to DB'))
    .catch(err => console.log(err))
app.listen(port)
console.log("App is listening on port: ${port}")