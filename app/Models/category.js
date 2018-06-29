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
        title: {
            type: Sequelize.STRING,
            notEmpty: true
        }
    })
};