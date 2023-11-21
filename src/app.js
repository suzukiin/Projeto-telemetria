//módulo
const express = require('express');
const app = express();
const mongoose = require('mongoose')
mongoose.connect('mongodb+srv://lucas:lucas1411@apicluster.bqlexmj.mongodb.net/');
const mqtt = require('mqtt')
const client = mqtt.connect('mqtt://localhost:1883');

//mqtt on
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