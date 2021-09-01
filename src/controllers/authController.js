const jwt = require("jsonwebtoken");

require('dotenv').config();



const controller = {

    login: function (req, res ) {

        const user = {
            id: 33,
            email: 'eabramzon@gmail.com',
            name: 'Quique'
        };

        const salt = process.env.JWT_SALT;

        const token = jwt.sign( {user}, `${salt}`, { expiresIn: '240h'} );

        res.json({"Response":"ruta del login devuelve token", "token": token} );

    },

    register: function (req, res ) {

        res.json({"Response":"ruta de registrarse"});

    }


}

module.exports = controller;