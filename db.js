/*
const { Sequelize } = require('sequelize');

require('dotenv').config();

const dbName = process.env.DB_NAME;

const dbUserName = process.env.DB_USER;

const dbPassword = process.env.DB_PASSWORD;

// modells
const UserModel = require( './src/models/User' );
const MovieModel = require( './src/models/Movie' );
const GenreModel = require( './src/models/Genre' );



const sequelize = new Sequelize( dbName, dbUserName, dbPassword, {

    host: '127.0.0.1',
    dialect: 'mysql'

});

try{

    sequelize.authenticate().then( () => {

        console.log('db connected ');

    })


}catch(error){

    console.error( 'db connection fail: ', error );
}

const User = UserModel( sequelize, Sequelize );
const Movies = MovieModel( sequelize, Sequelize );
const Genre = GenreModel( sequelize, Sequelize );

sequelize.sync( {force: false} ).then( () => {

    console.log('db is synchronized');

});

module.exports = { User, Movies, Genre };
*/