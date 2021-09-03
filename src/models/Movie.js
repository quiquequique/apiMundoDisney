

module.exports = ( sequelize, type ) => {

    const Movie = sequelize.define( 'Movie', {

        title: type.STRING,
        image: type.STRING,
        stars: type.INTEGER(1)

    },{} );
    // asociations
    Movie.associate = function( models ) {

        Movie.belongsTo( models.Genre,{
            as:'genre',
            foreignKey: 'genre_id'
        });
    }

    return Movie;
};