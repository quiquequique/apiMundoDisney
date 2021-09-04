//const { Genre } = require( '../../db/models');
const db = require('../../db/models')




const findOne = async ( req, res ) => {

    try{

        const genreId = req.params.id;

        const genre = await db.Genre.findByPk( genreId, { include: "movies" } );

        if( !genre ){

            return res.status(404).json( {msg: 'no se encontro'} );

        }

        return res.json( genre );

    }catch( error ){

        return res.status(500).json( {error: true} );

    }

};

module.exports = {findOne};
