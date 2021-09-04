


module.exports = ( sequelize, type ) => {

    const User =  sequelize.define( 'user', {
        id:{
            type: type.INTEGER,
            primaryKey: true,
            autoIncrement: true
        },
        name: type.STRING,
        lastName: type.STRING,
        email: type.STRING,
        password: type.STRING
    },
    {}
    );

    return User;

}