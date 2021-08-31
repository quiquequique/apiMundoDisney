const characterController = require( '../controllers/characterController' );

var express = require( 'express' );
var router = express.Router();

/* GET home page. */
router.get( '/', characterController.list );
router.get( '/:id', characterController.getOne );

module.exports = router;