const express = require('express')
const app = express()

//rotas
const appRoute = require('./routes/app-route')
app.use('/', appRoute)

//models
const mqttModel = require('./models/mqtt')

module.exports = app