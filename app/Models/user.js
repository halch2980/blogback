module.exports = function(sequelize , Sequelize){
    const options = {
        timestamps: false
    };
    const User = sequelize.define('users', {

        id: {
            type: Sequelize.INTEGER,
            autoIncrement: true,
            primaryKey: true
        },

        email: {
            notEmpty: true,
            type: Sequelize.STRING
        },

        name: {
            notEmpty: true,
            type: Sequelize.STRING
        },

        password: {
            notEmpty: true,
            type: Sequelize.STRING,
            get(){

            }
        },

        created_at: Sequelize.DATE,

        updated_at: Sequelize.DATE,

    }, options);

    return User;
};