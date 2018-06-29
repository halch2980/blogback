module.exports = function(sequelize , Sequelize){
    const options = {
        timestamps: false
    };
    const Category = sequelize.define('category', {
        id: {
            type: Sequelize.INTEGER,
            autoIncrement: true,
            primaryKey: true
        },
        mail: {
            notEmpty: true,
            type: Sequelize.STRING
        },
        name: {
            notEmpty: true,
            type: Sequelize.STRING
        },
        password: {
            notEmpty: true,
            type: Sequelize.STRING
        }
    })
};