const controller = require('../controller/sorteDeHojeController')
const express = require('express')

const router = express.Router()

router.post('/sorte', controller.createSorte)


module.exports = router