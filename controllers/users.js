const express = require('express')
const sequelize = require('../db')

async function readUsers(req, res) {
    // find all the users
    const users = await sequelize.models.users.findAndCountAll();
    return res.status(200).json({ data: users});
}

async function createUser(req, res){
    const { body } = req;
    const user = await sequelize.models.users.create({
        name: body.name,
        email: body.email,
        password: body.password,
        type: body.type,
    });
    await user.save()
    return res.status(201).json( { data: user });
}

async function updateUser(req,res){
    const { body, params: { id } }=req;
    const user = await sequelize.models.users.findByPk(id);
    if(!user){return res.status(404).json({ code: 404, message:'user not found'})}
    const updatedUser = await user.update({
        name: body.name,
        email: body.email,
        password: body.password,
        type: body.type,
    })
    return res.json({   data: updatedUser});
}

async function deleteUser(req,res){
    const { body, params: { id } }=req;
    const user = await sequelize.models.users.findByPk(id);
    if(!user){return res.status(404).json({ code: 404, message:'user not found'})}
    await user.destroy()
    return res.json();
}

async function readUser(req, res) {
    const { body, params: { id } }=req;
    const user = await sequelize.models.users.findByPk(id);
    if(!user){return res.status(404).json({ code: 404, message:'user not found'})}
    return res.status(200).json({ data: user});
    
}

module.exports = {
    readUsers,
    createUser,
    updateUser,
    deleteUser,
    readUser
}