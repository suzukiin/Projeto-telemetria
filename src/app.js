const express = require('express')
const app = express()
const mongoose = require('mongoose')
mongoose.connect('mongodb://127.0.0.1:27017/')

//models
const mqttModel = require('./models/mqtt')

//rotas
const appRoute = require('./routes/app-route')
const mqtt = require('./models/mqtt')
app.use('/', appRoute)

app.listen(3000, ()=>{
    console.log("Server running");
})