// authetication.js
const jwt = require('jsonwebtoken');
const dotenv = require('dotenv');
const sequelize = require('../db')

dotenv.config();

const authenticate = (req, res, next) => {
  const authHeader = req.headers['authorization']
  const token = authHeader && authHeader.split(' ')[1]
  console.log(token)
  if (!token) return res.sendStatus(401).json({sucess:false, message:"no token provided"})
  jwt.verify(token, process.env.TOKEN_SECRET, async(err, user) => {
    if (err) return res.status(401).json({ message: 'Unauthorized' });
    req.user = await sequelize.models.users.findOne({ where: { id: user.userId }})
    console.log(req.user)
    next()
  })
};

module.exports = authenticate;