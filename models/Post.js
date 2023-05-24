// import important parts of sequelize library
const { Model, DataTypes } = require('sequelize');
// import our database connection from config.js
const sequelize = require('../config/connection');

// Initialize Post model (table) by extending off Sequelize's Model class
class Post extends Model {}

// Set up fields and rules for Post model
Post.init(
  {
    id: {
        type: DataTypes.INTEGER,
        allowNull: false,
        primaryKey: true,
        autoIncrement: true,
  },
  post_title: {
    type: DataTypes.STRING,
    allowNull: false,
},
    post_body: {
        type: DataTypes.STRING(1000),
        allowNull: false,
    },
    author_id: {
        type: DataTypes.INTEGER,
        references: {
            model: 'author',
            key: 'id',
        },
    },  
},
  {
    sequelize,
    freezeTableName: true,
    underscored: true,
    modelName: 'post',
  }
);

module.exports = Post;
