const authController = require( '../controllers/authController' );
const { check } = require('express-validator');


var express = require('express');
var router = express.Router();

// rutas login users

router.post('/login',
[
    check( 'email', 'incorrect email format' ).not().isEmpty().isEmail(),

    check( 'password', 'incorrect password format' ).not().isEmpty().isLength( {min: 4, max: 20} )
]
, authController.login);

router.post('/register',
[
    check( 'name', 'name is a mandatory parameter' ).not().isEmpty(),

    check( 'lastName', 'lastName is a mandatory parameter' ).not().isEmpty(),

    check( 'email', 'incorrect email format' ).not().isEmpty().isEmail(),

    check( 'password', 'incorrect password format' ).isLength( {min: 4} )
]
, authController.register);



module.exports = router;
