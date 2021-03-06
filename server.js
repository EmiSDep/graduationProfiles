require('dotenv').config()

const cors = require('cors')
const express = require('express')
const app = express()
const mongoose = require('mongoose')

mongoose.connect(process.env.DATABASE_URL, { useNewUrlParser: true, useUnifiedTopology: true })
const db = mongoose.connection
db.on('error', (error) => console.error(error))
db.once('open', () => console.log('Connected to Database'))

app.use(express.json())
app.use(cors())

const graduatesRouter = require('./routes/graduates')
app.use('/graduates', graduatesRouter)


app.listen(3000, () => console.log('Server Started'))