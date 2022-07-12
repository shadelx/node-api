const { Sequelize } = require('sequelize');

// importing models

const User = require('../models/User')

//database connection
const sequelize = new Sequelize({
    dialect: 'sqlite',
    storage: './data.sqlite3'
})

// Getting models
const models = [
    User
];

//register models in sequelize
models.forEach((model) => { model(sequelize) })

module.exports = sequelize
