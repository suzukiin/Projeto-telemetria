'use strict'
const mongoose = require('mongoose')
const Schema = mongoose.Schema

const schema = new Schema({
    topic:{
        type: String,
        required: true,
    },

    message:{
        type: String,
        required: true,
    }
})

module.exports = mongoose.model('mqtt', schema)