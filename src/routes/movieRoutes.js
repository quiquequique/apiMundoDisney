const movieController = require( '../controllers/movieController' );

var express = require( 'express' );
var router = express.Router();

/* GET home page. */
router.get( '/', movieController.list );
router.get( '/:id', movieController.getOne );

module.exports = router;