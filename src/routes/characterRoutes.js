const characterController = require( '../controllers/characterController' );
const verifyToken = require( '../middlewares/verifyToken');

var express = require( 'express' );

var router = express.Router();

/* GET home page. */
router.get( '/', verifyToken, characterController.list );
router.get( '/:id', characterController.getOne );


module.exports = router;