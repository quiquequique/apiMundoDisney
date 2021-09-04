

module.exports = ( sequelize, type ) => {

    const ActorMovie = sequelize.define(

    "ActorMovie", {}, {tableName: "actor_movie"});

    return ActorMovie;
};