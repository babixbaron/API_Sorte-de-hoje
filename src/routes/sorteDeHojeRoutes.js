const controller = require('../controllers/sorteDeHojeController')
const express = require('express')

const router = express.Router()

router.post('/sorte/post', controller.createSorte)
router.get('/sortes', controller.findAllSortes)
router.get('/sorte/:id', controller.findSorteById)
router.patch('/sorte/update/:id', controller.updateSorte)
router.delete('/sorte/remove/:id', controller.deleteSorte)

module.exports = router