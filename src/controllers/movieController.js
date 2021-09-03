const { Movies } = require( '../../db')

const controller = {

    list: async ( req, res ) => {

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
        try{

            const returnedMovies = await Movies.findAll();

            return res.status( 200 ).json( {

                meta:{

                    status: 200,
                    count: returnedMovies.length,
                    link:'/movies'

                },
                data: returnedMovies.map( ( movie ) => {

                    return {

                        image: movie.image,
                        title: movie.title,
                        createdAt: movie.createdAt

                    }
                })
            } );

        }catch(error){

            return res.status(500).json( {error: true} );
        }
    },

    // get one movie by id "detailed output"

    getOne: async ( req, res ) => {

        try{

            const movieId = req.params.id;

            const returnedOne = await Movies.findByPk( movieId, { include: "genre" } );

            if( !returnedOne ){

                return res.status( 404 ).json( {msg: 'movie doesnt exist'} );

            }

            return res.status( 200 ).json(returnedOne);

        }catch(error){

            return res.status( 500 ).json( {msg: `${error}`})

        }


    },

    create: async ( req, res ) => {

        try{

            const movieToCreate = req.body;

            console.log( movieToCreate );

            const createdMovie = await Movies.create( movieToCreate );

            if( createdMovie ){

                return res.status(201).json( {message: `se creo la pelicula: ${movieToCreate.title}`} );

            }else{

                return error;
            }
        }catch(error){

            return res.status(400).json( {error: `del catch: ${error}`} );
        }



    }


}

module.exports = controller;