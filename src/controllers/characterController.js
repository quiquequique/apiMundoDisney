const controller = {

    list: function ( req, res ) {

        if( req.query ){

            // search character by name

            if( req.query.name ){

                const nameQuery = req.query.name;

                res.json( {"Response":`tiene query name: ${nameQuery}`} );
            };

            // search character by age

            if( req.query.age ){

             const ageQuery = req.query.age;

             res.json( {"Response":`tiene query age: ${ageQuery}`} );

            };

            // search character by movies

            if( req.query.movies ){

                const idMovie = req.query.movies;

                res.json( {"Response":`tiene query idMovie: ${idMovie}`} );

            };
        };

        // list all characters

        res.json( {"Response":"listado de actores"} );

    },

    // get one character by id

    getOne: function ( req, res ) {

        const characterId = req.params.id;

        res.json( {"Response":`un actor id: ${characterId}`} );

    }


}

module.exports = controller;