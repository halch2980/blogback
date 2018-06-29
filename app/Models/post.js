module.exports = function(sequelize , Sequelize){
    const options = {
        timestamps: false
    };
    const Post = sequelize.define('post', {
        id: {
            type: Sequelize.INTEGER,
            primaryKey: true,
            autoIncrement: true
        },
        title: {
            notEmpty: true,
            type: Sequelize.STRING
        },
        desc: {
            notEmpty: true,
            type: Sequelize.TEXT
        },
        img: {
            notEmpty: true,
            type: Sequelize.STRING
        },
        user_id: {
            notEmpty: true,
            type: Sequelize.INTEGER
        },
        cat_id: {
            notEmpty: true,
            type: Sequelize.INTEGER
        }
    });

};