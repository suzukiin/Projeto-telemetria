const express = require('express')
const router = express.Router()
const controller = require('../controller/mqtt-controller')

router.get('/', controller.get)

module.exports = router