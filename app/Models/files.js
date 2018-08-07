module.exports = function(sequelize , Sequelize){
    const options = {
        timestamps: false
    };
    const File = sequelize.define('files', {

        id: {
            type: Sequelize.INTEGER,
            autoIncrement: true,
            primaryKey: true
        },

        file_name: {
            type: Sequelize.STRING,
            notEmpty: true,
        },

        file_path: {
            type: Sequelize.STRING,
            notEmpty: true,
        },

        type: {
            type: Sequelize.BOOLEAN,
            notEmpty: true,
        },

        post_id: {
            type: Sequelize.INTEGER,
        },

        comment_id: {
            type: Sequelize.INTEGER,
        },

        created_at: Sequelize.DATE,

        updated_at: Sequelize.DATE,

    }, options);

    return File;
};