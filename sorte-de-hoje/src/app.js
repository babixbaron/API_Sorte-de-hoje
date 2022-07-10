require('dotenv').config()
const express = require('express')
const cors = require('cors')
const mongoose = require('./database/mongooseConnect')
const sorteDeHojeRoutes = require('./routes/sorteDeHojeRoutes')

const app = express()

app.use(express.json())
app.use(cors())

mongoose.connect()

app.use(sorteDeHojeRoutes)

module.exports = app