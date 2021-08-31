const authController = require( '../controllers/authController' );


var express = require('express');
var router = express.Router();

// rutas login users

router.get('/login', authController.login);

router.get('/register', authController.register);

module.exports = router;
