const characterController = require( '../controllers/characterController' );
const verifyToken = require( '../middlewares/verifyToken');

var express = require( 'express' );

var router = express.Router();

/* GET home page. */
router.get( '/', verifyToken, characterController.listActors );
router.post( '/', verifyToken, characterController.createActor );
router.put( '/:id', verifyToken, characterController.updateActor );
router.delete( '/:id', verifyToken, characterController.deleteActor );
router.get( '/:id', verifyToken, characterController.getOneActor );


module.exports = router;