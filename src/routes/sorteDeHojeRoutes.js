const controller = require('../controllers/sorteDeHojeController')
const express = require('express')

const router = express.Router()

router.post('/sorte', controller.createSorte)
router.get('/sortes', controller.findAllSortes)
router.get('/sorte/:id', controller.findSorteById)
router.patch('/sorte/:id', controller.updateSorte)

module.exports = router