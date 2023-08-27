const  connectToMongo = require('./db')
const express = require('express')
const cors = require('cors')
const userRoute = require('./routes/userRoute')
require('dotenv').config()

connectToMongo();

const app = express()
const port = process.env.PORT || 5000

app.use(express.json)
app.use(cors())

app.use('api/auth', userRoute)

app.listen(port, ()=> {
    console.log(`App Listening at port ${port}`);
})