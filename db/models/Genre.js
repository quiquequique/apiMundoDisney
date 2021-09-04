
module.exports = ( sequelize, type ) => {

    const Genre = sequelize.define( 'Genre', {

        name: type.STRING,
        image: type.STRING,

    },{} );
    // asociations
    Genre.associate = function( models ) {

        Genre.hasMany( models.movie,{as: 'movies'});
    }

    return Genre;
};