const express = require('express')

function readPet(req, res) {
    res.send("you read pet")
}

function createPet(req, res){
    res.send('you create pet')
}

function updatePet(req,res){
    res.send('you update pet')
}

function deletePet(req,res){
    res.send('you delete pet')
}

module.exports = {
    readPet,
    createPet,
    updatePet,
    deletePet
}