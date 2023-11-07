//módulo
const express = require('express');
const app = express();
const mongoose = require('mongoose')
mongoose.connect('mongodb://127.0.0.1:27017/');
const mqtt = require('mqtt')
const client = mqtt.connect('mqtt://localhost:1883');

client.on('connect', ()=>{
    console.log("broker on...");
})
//models
const mqttModel = require('./models/mqtt');

//rotas
const appRoute = require('./routes/app-route');
const mqttRoute = require('./models/mqtt');
app.use('/', appRoute);

//servidor
app.listen(3000, ()=>{
    console.log("Server running");
})