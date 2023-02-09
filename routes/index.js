const express =require('express')
const router = express.Router()

const authenticate = require('../middlewares/authentication');

router.get('/',(req, res) => { 
    res.send('<h1>welcome to this api</h1>')
 })

router.use('/pets', authenticate, require('./pets'))
router.use('/users',authenticate, require('./users'))
router.use('/auth', require('./auth'))

module.exports = router