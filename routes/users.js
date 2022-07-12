const express = require('express')
const router = express.Router()
const permission = require('../middlewares/permission')

const {
    readUsers,
    createUser,
    updateUser,
    deleteUser,
    readUser
} = require('../controllers/users')

router.get('/', permission('admin', 'client'),readUsers)
router.post('/', createUser)
router.put('/:id',updateUser)
router.delete('/:id',deleteUser)

router.get('/:id', readUser)
module.exports = router