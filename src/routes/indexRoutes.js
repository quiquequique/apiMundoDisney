const indexController = require( '../controllers/indexController' );

var express = require( 'express' );
var router = express.Router();

/* GET home page. */
router.get( '/', indexController.home );

module.exports = router;
