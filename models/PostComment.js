const { Model, DataTypes } = require('sequelize');

const sequelize = require('../config/connection');

class PostComment extends Model {}

PostComment.init(
  {
    
    id: {
      type: DataTypes.INTEGER, 
      allowNull: false, 
      primaryKey: true, 
      autoIncrement: true, 
  },
  post_id: {
      type: DataTypes.INTEGER, 
      allowNull: false, 
      
      references: {
        model: 'post',
        key: 'id',
      },
    },
    comment_id: {
      type: DataTypes.INTEGER, 
      allowNull: false, 
    
      references: {
        model: 'comment',
        key: 'id',
      },
    },
  },
  {
    sequelize,
    timestamps: false,
    freezeTableName: true,
    underscored: true,
    modelName: 'post_comment',
  }
);

module.exports = PostComment;