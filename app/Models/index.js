const fs = require('file-system');
const path = require("path");
const Sequelize = require('sequelize');
const sequelize = new Sequelize('blog', process.env.DB_USER, process.env.DB_PASSWORD, {
    host: process.env.DB_HOST,
    dialect: 'mysql',
    operatorsAliases: false,

    pool: {
        max: 5,
        min: 0,
        acquire: 30000,
        idle: 10000
    },
});


const db = {};

fs
    .readdirSync(__dirname)
    .filter(function (file) {
        return(file.indexOf(".") !== 0) && (file !== "index.js");
    })
    .forEach(function (file) {
        const model = sequelize.import(path.join(__dirname, file));
        db[model.name] = model;
    
    });


Post.belongsTo(User, {foreignKey: 'id', targetKey: 'user_id'});
Post.belongsTo(Categories, {foreignKey: 'id', targetKey: 'cat_id'});




db.sequelize = sequelize;
db.Sequelize = Sequelize;

module.exports = db;