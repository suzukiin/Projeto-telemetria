'use strict'
const mongoose = require('mongoose')
const mqttModel = mongoose.model('mqtt')

exports.get = async(req, res, next)=>{
    let data = await mqttModel.find();
    res.status(200).send({data})
}