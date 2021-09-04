const genreController = require( '../controllers/genreController' );
const verifyToken = require( '../middlewares/verifyToken');

var express = require( 'express' );
var router = express.Router();

//router.get( '/', genreController.listAll );
router.get('/:id', genreController.findOne );

module.exports = router;