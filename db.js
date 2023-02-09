const { Sequelize } = require('sequelize');

// importing models

const User = require('./models/User')

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

// Configuring relations
// const { products, reviews, users, orders } = sequelize.models;
// reviews.belongsTo(products); // Relation one-to-one in reviews table
// orders.belongsTo(users); // Relation: Order has one user
// orders.belongsTo(products); // Relation: Order has one product

module.exports = sequelize
