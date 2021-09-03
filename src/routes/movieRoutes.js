const movieController = require( '../controllers/movieController' );
const verifyToken = require( '../middlewares/verifyToken');

var express = require( 'express' );
var router = express.Router();

/* GET home page. */
router.post( '/create', verifyToken, movieController.create);
router.get( '/', verifyToken, movieController.list );
router.get( '/:id', verifyToken, movieController.getOne );

module.exports = router;