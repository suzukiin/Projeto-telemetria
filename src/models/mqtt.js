'use strict'
const mongoose = require('mongoose');
const Schema = mongoose.Schema;

const schema = new Schema({
    topic:{
        type: String,
        required: true,
    },

    message:{
        type: String,
        required: true,
    },

    data: {
        type: Date,
        default: Date.now()
    }
})

module.exports = mongoose.model('mqtt', schema);