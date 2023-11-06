const app = require('../app')

const mqtt = require('mqtt')
const client = mqtt.connect('mqtt://localhost:1883')

const mongoose = require('mongoose')
mongoose.connect('mongodb://127.0.0.1:27017/')

app.listen(3000, ()=>{
    console.log("Server running!");
})