const movieController = require( '../controllers/movieController' );
const verifyToken = require( '../middlewares/verifyToken');
const { check } = require('express-validator');


var express = require( 'express' );
var router = express.Router();

/* GET home page. */
router.get( '/', verifyToken, movieController.list );

router.get( '/:id', verifyToken, movieController.getOne );



router.post( '/', verifyToken,
[
    check( 'genreId', 'incorrect genre format' ).not().isEmpty().isLength( {min: 1, max: 1} ),

    check( 'title', 'incorrect title format' ).not().isEmpty().isLength( {min: 1, max: 50} ),

    check( 'image', 'incorrect image format' ).not().isEmpty().isLength( {min: 1, max: 255} ),

    check( 'stars', 'incorrect stars format' ).not().isEmpty().isLength( {min: 1, max: 1} ),
]
, movieController.createMovie);



router.put( '/:id', verifyToken,
[
    check( 'genreId', 'incorrect genre format' ).not().isEmpty().isLength( {min: 1, max: 1} ),

    check( 'title', 'incorrect title format' ).not().isEmpty().isLength( {min: 1, max: 50} ),

    check( 'image', 'incorrect image format' ).not().isEmpty().isLength( {min: 1, max: 255} ),

    check( 'stars', 'incorrect stars format' ).not().isEmpty().isLength( {min: 1, max: 1} ),
]
, movieController.updateMovie);



router.delete( '/:id', verifyToken, movieController.deleteMovie);

module.exports = router;