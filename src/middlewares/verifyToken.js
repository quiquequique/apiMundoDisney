const jwt = require('jsonwebtoken');

require('dotenv').config();



module.exports =( req, res, next ) => {

    const bearerHeader = req.headers['authorization'];

    if( typeof bearerHeader !== 'undefined' ){

        const bearer = bearerHeader.split(" ");

        const token = bearer[1];

        const salt = process.env.JWT_KEY;

        jwt.verify( token, `${salt}`, ( error, data ) => {

            if( !error ){

                req.userData = data;

                next();

            }else{

                res.status(403).json({msg:`${error}`});
            }
        });

    }else{

        res.status(403).json({msg: 'a token is expected'});
    }

}