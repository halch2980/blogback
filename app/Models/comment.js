module.exports = function(sequelize , Sequelize){
    const options = {
        timestamps: false
    };
    const Comment = sequelize.define('comments', {

        id: {
            type: Sequelize.INTEGER,
            autoIncrement: true,
            primaryKey: true
        },

        comment: {
            type: Sequelize.STRING,
            notEmpty: true,
        },

        post_id: {
            type: Sequelize.INTEGER,
            notEmpty: true
        },

        user_id: {
            type: Sequelize.INTEGER,
            notEmpty: true
        },

        created_at: Sequelize.DATE,

        updated_at: Sequelize.DATE,

    }, options);

    return Comment;
};