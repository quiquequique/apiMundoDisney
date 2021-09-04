

module.exports = ( sequelize, type ) => {

    const Movie = sequelize.define( 'movie', {

        title: type.STRING,
        image: type.STRING,
        stars: type.INTEGER(1),
        //genreId:{ type: type.INTEGER, foreignKey: true }

    },{} );
    // asociations
    Movie.associate = function( models ) {

        Movie.belongsTo( models.Genre,{
            as:'genre',
            foreignKey: 'genreId'
        });
    }

    return Movie;
};