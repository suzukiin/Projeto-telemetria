'use strict'
const respository = require('../repository/mqtt-repository')

exports.get = (req, res, next) =>{
    let data = respository.get();
    res.status(200).send({data})
}