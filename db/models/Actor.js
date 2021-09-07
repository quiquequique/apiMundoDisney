
module.exports = (sequelize, type) => {

    const Actor = sequelize.define( "Actor",

    {
        image: type.STRING,
        name: type.STRING,
        age: type.INTEGER,
        weight: type.INTEGER,
        history: type.STRING(510)
    },
    {
        timestamps: false
    }
    );
    Actor.associate = function (models) {

        Actor.belongsToMany( models.Movie, {through: models.ActorMovie, as: 'movies'} )
    };
    return Actor;
}