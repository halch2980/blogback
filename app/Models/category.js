module.exports = function(sequelize , Sequelize){
    const options = {
        timestamps: false
    };
    const Category = sequelize.define('categories', {

        id: {
            type: Sequelize.INTEGER,
            autoIncrement: true,
            primaryKey: true
        },

        title: {
            type: Sequelize.STRING,
            notEmpty: true,
            unique: true
        },

        created_at: Sequelize.DATE,

        updated_at: Sequelize.DATE,

    }, options);

    return Category;
};