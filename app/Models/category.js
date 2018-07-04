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
        },
        created_at: Sequelize.DATE,
        updated_at: Sequelize.DATE,
    })
};