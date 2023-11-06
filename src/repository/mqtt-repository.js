'use strict'
const mongoose = require('mongoose')
const mqttModel = mongoose.model('mqtt')

exports.get = async()=>{
    let data = await mqttModel.find();
    return data
}