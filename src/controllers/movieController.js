const controller = {

    list: function ( req, res ) {

        if( req.query ){

            // search movie by name

            if( req.query.name ){

                const nameQuery = req.query.name;

                res.json( {"Response":`tiene query name: ${nameQuery}`} );
            };

            // search movies by genre

            if( req.query.genre ){

             const genreQuery = req.query.genre;

             res.json( {"Response":`tiene query genre: ${genreQuery}`} );

            };

            // list movies by order asc || desc

            if( req.query.order ){

                const orderOfList = req.query.order;

                res.json( {"Response":`tiene query order: ${orderOfList}`} );

            };
        };

        // list all movies

        res.json( {"Response":"listado de peliculas"} );

    },

    // get one movie by id "detailed output"

    getOne: function ( req, res ) {

        const movieId = req.params.id;

        res.json( {"Response":`una peli id: ${movieId}`} );

    }


}

module.exports = controller;