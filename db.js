const Sequelize = require('sequelize');

require('dotenv').config();

const dbName = process.env.DB_NAME;

const dbUserName = process.env.DB_USER;

const dbPassword = process.env.DB_PASSWORD;


const UserModel = require('./src/models/User');


const sequelize = new Sequelize( dbName, dbUserName, dbPassword, {

    host: '127.0.0.1',
    dialect: 'mysql'
});

const User = UserModel( sequelize, Sequelize);

sequelize.sync( {force: false} )
.then( () => {

    console.log('db is synchronized');
});

module.exports = {User}