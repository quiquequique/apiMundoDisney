const controller = {

    home: function( req, res ) {

       res.render('index', { title: 'Mundo-Disney' });

    }

}

module.exports = controller;