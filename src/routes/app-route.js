const express = require('express')
const router = express.Router()
const mongoose = require('mongoose')
const mqttModel = mongoose.model('mqtt')

//rota para pegar todos os dados do banco
router.get('/all', async(req, res, next)=>{
    let data = await mqttModel.find()
    res.status(200).send({data})
})

//rota para pegar o ultimo dado enviado para o Banco de Dados
router.get('/', async(req, res, next)=>{
    let data = await mqttModel.findOne().sort({ field: 'asc', _id: -1 })
    res.status(200).send({data})
})

module.exports = router