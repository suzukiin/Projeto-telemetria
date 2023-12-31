const express = require('express');
const router = express.Router();
const mongoose = require('mongoose');
const mqttModel = mongoose.model('mqtt');

//rota para pegar todos os dados do banco
router.get('/all', async(req, res, next)=>{
    let data = await mqttModel.find();
    res.header("Access-Control-Allow-Origin", "*");
    res.header("Access-Control-Allow-Headers", "Origin, X-Request-Width, Content-Type, Accept");
    res.status(200).json(data);
})

//rota para pegar o ultimo dado enviado para o Banco de Dados
router.get('/last', async(req, res, next)=>{
    let data = await mqttModel.findOne().sort({ field: 'asc', _id: -1 })
    res.header("Access-Control-Allow-Origin", "*");
    res.header("Access-Control-Allow-Headers", "Origin, X-Request-Width, Content-Type, Accept");
    res.status(200).json(data);
})

module.exports = router;