const express = require('express')
const app = express()

//rotas
const appRoute = require('./routes/app-route')
app.use('/', appRoute)

module.exports = app