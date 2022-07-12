const controller = require('../controllers/sorteDeHojeController')
const express = require('express')

const router = express.Router()

router.post('/sorte', controller.createSorte)
router.get('/sortes', controller.findAllSortes)

module.exports = router