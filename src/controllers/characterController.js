const db = require( '../../db/models' );
const { validationResult } = require('express-validator');



const controller = {

    listActors: async ( req, res ) => {

        console.log( req.body );

        if( Object.keys(req.body).length !== 0 ){

            return res.status( 401 ).json( {meta:{status: '401', msg:'content in body unauthorized '}} );
        };

        if( req.query ){

            // search character by name

            if( req.query.name ){

                const nameQuery = ( req.query.name ).trim();

                try{

                    const characters = await db.Actor.findAll( {where:{name:`${nameQuery}`}} );

                    if( characters.length !== 0 ){ 

                        return res.status( 200 ).json( {meta:
                            {

                                status: '200',
                                link:'/characters',
                                count: characters.length

                            },
                            data: {characters}
                        });

                        }else{

                            res.status(404).json( {meta:{msg: 'character not found'}} );
                        }


                }catch( error ){

                    return res.status(500).json( {meta:{error: error}} );

                };

            };

            // search character by age

            if( req.query.age ){

                const ageQuery = req.query.age;

                try{

                   const characters = await db.Actor.findAll( {where:{age:`${ageQuery}`}} );

                   if( characters.length !== 0 ){ return res.status( 200 ).json( {meta:{

                       status: '200',
                       link:'/characters',
                       count: characters.length

                       },
                       data: {characters}
                   });
                    }else{

                        res.status(404).json( {meta:{msg: 'character not found'}} );
                    }


                }catch( error ){

                   return res.status(500).json( {meta:{error: error}} );

                }

            };

            // search character by movies

            if( req.query.movies ){

                const idMovie = ( req.query.movies ).trim();

                try{

                    const selectedMovie = await db.Movie.findAll(  { where:{id:`${idMovie}`},include:["actors"]}  );

                    if( selectedMovie !== 0 ){

                        return res.status( 200 ).json( {meta:
                            {

                                status: '200',
                                link:'/characters',
                                actorsCount: (selectedMovie[0].actors).length

                            },data: selectedMovie[0].actors}

                        );

                    }else{

                            res.status(404).json( {meta:{msg: 'character not found'}} );
                    }


                }catch( error ){

                    return res.status(500).json( {meta:{error: error}} );

                };

                res.json( {"Response":`tiene query idMovie: ${idMovie}`} );

            };

        };

        // list all characters

            try{

                const characters = await db.Actor.findAll();

                return res.status( 200 ).json( {meta:{

                    status: '200',
                    link:'/characters',
                    count: characters.length

                    },
                    data: characters.map( ( character ) => {

                        return {

                            image: character.image,
                            name: character.name

                        }
                    })
                } );

            }catch( error ){

                return res.status(500).json( {meta:{error: error}} );

            }
    },

    getOneActor: async ( req, res ) => {

        if( Object.keys(req.body).length !== 0 ){

            return res.status( 401 ).json( {meta:{status: '401', msg:'content in body unauthorized '}} );
        };

        try{

            const characterId = req.params.id;

            const requestedCharacter = await db.Actor.findByPk( characterId, {include: "movies"} );

            if( requestedCharacter ){

                let movieTitles = [];

                for( let i=0; i<(requestedCharacter.movies).length; i++){

                    movieTitles.push(requestedCharacter.movies[i].title);

                };

                let character = {

                    id: requestedCharacter.id,
                    image: requestedCharacter.image,
                    name: requestedCharacter.name,
                    age: requestedCharacter.age,
                    weight: requestedCharacter.weight,
                    history: requestedCharacter.history,
                    movies: movieTitles
                };

                console.log(movieTitles);

                res.status( 200 ).json( {
                                            meta:{status: "200",
                                            link: "/characters/:id",
                                            moviesCount: ((requestedCharacter.movies).length)},
                                            data:{character}
                                                } );

            }else{

                res.status( 404 ).json( {meta:{status:'404', msg:'character not found'}})
            };

        }catch(error){

            return res.status(500).json( {meta:{error: error}} );

        }
    },

    createActor: async ( req, res ) => {

        let errors = validationResult(req);

        if(!errors.isEmpty()){

            return res.status(422).json( {meta: {errors: errors.array()} } );

        };

        try{

            const actorToCreate = req.body;

            const createdActor = await db.Actor.create( actorToCreate );

            if( createdActor ){

                return res.status( 201 ).json( {meta:{status: '201', link: '/characters', msg:`se creo el actor: ${actorToCreate.name} correctamente`}});

            }else{

                return error;
            }

        }catch(error){

            return res.status( 500 ).json( error );

        }
    },
    updateActor: async ( req, res ) => {

        let errors = validationResult(req);

        if(!errors.isEmpty()){

            return res.status(422).json( {meta: {errors: errors.array()} } );

        };

        try{

            const actorToUpdate = req.body;

            const actorId = req.params.id;

            const updatedActor = await db.Actor.update( actorToUpdate, {where: {id: actorId}} );

            if( updatedActor == 1 ){

                return res.status( 200 ).json({
                    meta:{
                        status: 200,
                        msg: `se actualizo el actor: ${req.body.name} correctamente`
                    }
                })
            }else{

                return error;
            }

        }catch{

            return res.status( 500 ).json({meta:{msg:'server error'}});

        }
    },

    deleteActor: async ( req, res ) => {

        if( Object.keys(req.body).length !== 0 ){

            return res.status( 401 ).json( {meta:{status: '401', msg:'content in body unauthorized '}} );
        };

        try{

            const actorToDelete = req.params.id;

            const deletedActor = await db.Actor.destroy( {where: {id: actorToDelete}} );

            if( deletedActor ){

                return res.status( 200 ).json({
                    meta:{
                        status: 200,
                        msg: `se borro el actor: ${actorToDelete} correctamente`
                    }
                })
            }

        }catch(error){

            return res.status( 500 ).json({meta:{msg:'server error', error:`${error}` }});

        }
    }

}

module.exports = controller;