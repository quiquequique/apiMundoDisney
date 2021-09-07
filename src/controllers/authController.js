const jwt = require("jsonwebtoken");
const bcrypt = require('bcryptjs');
const { validationResult } = require('express-validator');
const db = require('../../db/models/index');
const sgMail = require('@sendgrid/mail');

require('dotenv').config();


const controller = {

    login: async (req, res ) => {

        let errors = validationResult(req);

        if(!errors.isEmpty()){

            return res.status(422).json( {meta: {errors: errors.array()} } );
        }

        try{

            const user = await db.user.findOne( { where:{ email: req.body.email } } );

            // console.log(user);

            if( user ){

                const passwordCompare = bcrypt.compareSync( req.body.password, user.password );

                if( passwordCompare ){

                    const jwtKey = process.env.JWT_KEY;

                    const token = jwt.sign( {user}, `${jwtKey}`, { expiresIn: '240h'} );

                    res.status(200).json( {meta:{status: '200'}, data:{"token": token}} );

                }else{

                    res.status(401).json( {meta:{error: `user or password are incorrect`, status: '401'}} );
                }

            }else{

                res.status(401).json( {meta:{error: `user or password are incorrect`, status: '401'}} );
            }

        }
        catch(error){

            res.status(401).json( {error: `user or password are incorrect: ${error}`} );
        }

    },

    register: async ( req, res ) => {

        let errors = validationResult(req);

        if(!errors.isEmpty()){

            return res.status(422).json( {meta: {errors: errors.array()}} );
        }

        const userExist = await db.user.findOne( { where:{ email: req.body.email } } );

        if( userExist ){

            res.status(409).json( {meta: {msg: " user allready exist "}} )
        }else{

            try{

                const passToEncript = req.body.password;

                req.body.password = bcrypt.hashSync( passToEncript, 10 );

                // console.log( req.body );

                const newUser = await db.user.create( req.body );

                if( newUser ){

                    sendEmail( req.body.name, req.body.lastName, req.body.email );

                    return res.json({

                        meta:{

                            status: "ok",

                            message: `se creo el user ${req.body.name} correctamente`
                        }
                    })
                }else{

                    return error;
                }

                return res.status( 200 ).json({msg:'user created'});

            }catch( error ){

                return res.status( 500 ).json( {error: `${error}`} );

            }
        }
        function sendEmail ( _name, _lastName, _email) {

            // using Twilio SendGrid's v3 Node.js Library
            // https://github.com/sendgrid/sendgrid-nodejs

            sgMail.setApiKey(process.env.SENDGRID_API_KEY)
            const msg = {
              to: `${_email}`, // Change to your recipient
              from: 'eabramzon@gmail.com', // Change to your verified sender
              subject: 'Sending with SendGrid is Fun',
              text: 'bienvenido a la api',
              html: `<strong>Hola ${_name} ${_lastName} bienvenido a mundo disney</strong>`,
            }
            sgMail
              .send(msg)
              .then(() => {
                console.log('Email sent')
              })
              .catch((error) => {
                console.error(error)
                })
        }
    },



}

module.exports = controller;