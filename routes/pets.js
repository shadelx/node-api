const express = require('express')
const router = express.Router()

const {
    readPet,
    createPet,
    updatePet,
    deletePet
} = require('../controllers/pets')

router.get('/', readPet)
router.post('/', createPet)
router.put('/:id',updatePet)
router.delete('/:id',deletePet)

module.exports = router