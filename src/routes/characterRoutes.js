const characterController = require( '../controllers/characterController' );
const verifyToken = require( '../middlewares/verifyToken');
const { check } = require('express-validator');


var express = require( 'express' );

var router = express.Router();

/* GET home page. */
router.get( '/', verifyToken, characterController.listActors );

router.post( '/', verifyToken,
[
    check( 'image', 'incorrect image format' ).not().isEmpty().isLength( {min: 4, max: 200} ),

    check( 'name', 'incorrect name format' ).not().isEmpty().isLength( {min: 2, max: 100} ),

    check( 'age', 'incorrect age format' ).not().isEmpty().isLength( {min: 1, max: 3} ),

    check( 'weight', 'incorrect weight format' ).not().isEmpty().isLength( {min: 1, max: 3} ),

    check( 'history', 'incorrect history format' ).not().isEmpty().isLength( {min: 1, max: 510} )
]
, characterController.createActor );



router.put( '/:id', verifyToken,
[
    check( 'image', 'incorrect image format' ).not().isEmpty().isLength( {min: 4, max: 200} ),

    check( 'name', 'incorrect name format' ).not().isEmpty().isLength( {min: 2, max: 100} ),

    check( 'age', 'incorrect age format' ).not().isEmpty().isLength( {min: 1, max: 3} ),

    check( 'weight', 'incorrect weight format' ).not().isEmpty().isLength( {min: 1, max: 3} ),

    check( 'history', 'incorrect history format' ).not().isEmpty().isLength( {min: 1, max: 510} )
]
, characterController.updateActor );



router.delete( '/:id', verifyToken, characterController.deleteActor );

router.get( '/:id', verifyToken, characterController.getOneActor );


module.exports = router;