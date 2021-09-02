const jwt = require("jsonwebtoken");
const bcrypt = require('bcryptjs');
const { validationResult } = require('express-validator');
const { User } = require('../../db');

require('dotenv').config();



const controller = {

    login: async (req, res ) => {

        let errors = validationResult(req);

        if(!errors.isEmpty()){

            return res.status(422).json({errors: errors.array()});
        }

        try{

            const user = await User.findOne( { where:{ email: req.body.email } } );

            // console.log(user);

            if( user ){

                const passwordCompare = bcrypt.compareSync( req.body.password, user.password );

                if( passwordCompare ){

                    const jwtKey = process.env.JWT_KEY;

                    const token = jwt.sign( {user}, `${jwtKey}`, { expiresIn: '240h'} );

                    res.status(200).json( {"token": token} );

                }

            }else{

                res.status(401).json( {error: `user or password are incorrect`} );
            }

        }
        catch(error){

            res.status(401).json( {error: `user or password are incorrect: ${error}`} );
        }

    },

    register: async ( req, res ) => {

        let errors = validationResult(req);

        if(!errors.isEmpty()){

            return res.status(422).json({errors: errors.array()});
        }

        try{

            const passToEncript = req.body.password;

            req.body.password = bcrypt.hashSync( passToEncript, 10 );

            const newUser = await User.create( req.body );

            return res.status( 200 ).json({msg:'user created'});

        }catch( error ){

            return res.status( 500 ).json( {error: true} );

        }
    },



}

module.exports = controller;