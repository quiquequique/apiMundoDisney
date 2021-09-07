const movieController = require( '../controllers/movieController' );
const verifyToken = require( '../middlewares/verifyToken');

var express = require( 'express' );
var router = express.Router();

/* GET home page. */
router.get( '/', verifyToken, movieController.list );
router.get( '/:id', verifyToken, movieController.getOne );
router.post( '/', verifyToken, movieController.createMovie);
router.put( '/:id', verifyToken, movieController.updateMovie);
router.delete( '/:id', verifyToken, movieController.deleteMovie);

module.exports = router;