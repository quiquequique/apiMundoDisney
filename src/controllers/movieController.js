
const db = require ('../../db/models')
const { validationResult } = require('express-validator');


const controller = {

    list: async ( req, res ) => {

        if( Object.keys(req.body).length !== 0 ){

            return res.status( 401 ).json( {meta:{status: '401', msg:'content in body unauthorized '}} );
        };

        if( req.query ){

            // search movie by name

            if( req.query.name ){

                const titleQuery = ( req.query.name ).trim();

                try{

                    const searchedMovie = await db.Movie.findAll( {where:{title:`${titleQuery}`}} );

                    if( searchedMovie.length !== 0 ){

                        return res.status( 200 ).json( {meta:
                            {

                                status: '200',
                                link:'/movies',
                                count: searchedMovie.length

                            },
                            data: {searchedMovie}
                        });

                    }else{

                        res.status(404).json( {meta:{msg: 'movie not found'}} );
                    }


                }catch( error ){

                    return res.status(500).json( {meta:{error: error}} );

                };

            };

            // search movies by genre

            if( req.query.genre ){

             const genreQuery = ( req.query.genre ).trim();

                try{

                    const searchedMovie = await db.Movie.findAll( {where:{genreId:`${genreQuery}`}} );

                    if( searchedMovie.length !== 0 ){ 

                        return res.status( 200 ).json( {meta:
                            {

                                status: '200',
                                link:'/movies',
                                count: searchedMovie.length

                            },
                            data: {searchedMovie}
                        });

                        }else{

                            res.status(404).json( {meta:{msg: 'movie not found'}} );
                        }


                }catch( error ){

                    return res.status(500).json( {meta:{error: error}} );

                };

            };

            // list movies by order asc || desc

            if( req.query.order ){

                const orderOfList = (req.query.order).trim();

                try{

                    const searchedMovie = await db.Movie.findAll( {order:[['createdAt', `${orderOfList}`]]} );

                    if( searchedMovie.length !== 0 ){ 

                        return res.status( 200 ).json( {meta:
                            {

                                status: '200',
                                link:'/movies',
                                count: searchedMovie.length

                            },
                            data: {searchedMovie}
                        });

                    }else{

                        res.status(404).json( {meta:{msg: 'movie not found'}} );
                    }


                }catch( error ){

                    return res.status(500).json( {meta:{error: error}} );

                };

                res.json( {"Response":`tiene query order: ${orderOfList}`} );

            };
        };
        // list all movies
        try{

            const returnedMovies = await db.Movie.findAll();

            if( returnedMovies ){

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
            }else{

                return error;
            }


        }catch(error){

            return res.status(500).json( {error: true, msg: `${error}`} );
        }
    },

    // get one movie by id "detailed output"

    getOne: async ( req, res ) => {

        if( Object.keys(req.body).length !== 0 ){

            return res.status( 401 ).json( {meta:{status: '401', msg:'content in body unauthorized '}} );
        };

        try{

            const movieId = req.params.id;

            const returnedOne = await db.Movie.findByPk ( movieId, {include:["actors"]});

            if( !returnedOne ){

                return res.status( 404 ).json( {msg: 'movie doesnt exist'} );

            }

            return res.status( 200 ).json({meta:{status: "200"}, data:{returnedOne}});

        }catch(error){

            return res.status( 500 ).json( {msg: `${error}`})

        }


    },

    createMovie: async ( req, res ) => {

        let errors = validationResult(req);

        if(!errors.isEmpty()){

            return res.status(422).json( {meta: {errors: errors.array()} } );

        };

        try{

            const movieToCreate = req.body;

            // console.log( movieToCreate );

            const createdMovie = await db.Movie.create( movieToCreate );

            if( createdMovie ){

                return res.status(201).json( {message: `se creo la pelicula: ${movieToCreate.title}`} );

            }else{

                return error;
            }
        }catch(error){

            return res.status(400).json( {error: `del catch: ${error}`} );
        }



    },
    updateMovie: async ( req, res ) => {

        let errors = validationResult(req);

        if(!errors.isEmpty()){

            return res.status(422).json( {meta: {errors: errors.array()} } );

        };

        try{

            const movieToUpdate = req.body;

            const movieId = req.params.id;

            const updatedMovie = await db.Movie.update( movieToUpdate, {where: {id: movieId}} );

            if( updatedMovie == 1 ){

                return res.status( 200 ).json({
                    meta:{
                        status: 200,
                        msg: `se actualizo la pelicula: ${req.body.title} correctamente`
                    }
                })
            }else{

                return res.status( 404 ).json({
                    meta:{
                        status: 404,
                        msg: `no se encontro la pelicula`
                    }
                })
            }

        }catch{

            return res.status( 500 ).json({meta:{msg:'server error'}});

        }
    },
    deleteMovie: async ( req, res ) => {

        if( Object.keys(req.body).length !== 0 ){

            return res.status( 401 ).json( {meta:{status: '401', msg:'content in body unauthorized '}} );
        };

        try{

            const movieToDelete = req.params.id;

            const deletedMovie = await db.Movie.destroy( {where: {id: movieToDelete}} );

            if( deletedMovie ){

                return res.status( 200 ).json({
                    meta:{
                        status: 200,
                        msg: `se borro la peli: ${movieToDelete} correctamente`
                    }
                })
            }else{

                return res.status( 404 ).json({
                    meta:{
                        status: 404,
                        msg: 'movie not found'
                    }
                })
            }

        }catch(error){

            return res.status( 500 ).json({meta:{msg:'server error', error:`${error}` }});

        }
    }


}

module.exports = controller;