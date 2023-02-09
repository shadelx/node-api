const express = require('express');
const router = express.Router();
const sequelize = require('../db');
const jwt = require('jsonwebtoken');
const dotenv = require('dotenv');

dotenv.config();

async function loginUser(req, res) {
    
    const { body } = req;
    const user = await sequelize.models.users.findOne({
        where: { email: body.email}
    })

    if(!user) {return res.status(401).json( { message: 'Unauthorized'})}

    if (!user.validPassword(body.password)) {
        return res.status(401).json({ message: 'Invalid credentials' });
      }

    const token = jwt.sign({ userId: user.id, userType: user.type}, process.env.TOKEN_SECRET, { expiresIn: 36000})

    return res.json({
        message: 'Authentication succesfully',
        token
    })
}

async function signupUser(req, res) {
    const { body } = req;
    let user = await sequelize.models.users.findOne({
        where:{email: body.email}
    })

    if(user){ return res.status(400).json({message: "this email is already register"})}

    user = await sequelize.models.users.create({
        name: body.name,
        email: body.email,
        password: body.password,
        type: 'client',
    })

    // await user.save()
    return res.json({message: 'your account was created successfully'})
    
}

module.exports = {
    loginUser,
    signupUser
}