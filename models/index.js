// import models
const Author = require('./Author');
const Post = require('./Post');
const Comment = require('./Comment');


// Comment belongsTo Post
  Comment.belongsTo(Post, {
    foreignKey: 'post_id',
  });

// Post have many Comments
  Post.hasMany(Comment, {
    foreignKey: 'post_id',
    onDelete: 'CASCADE',
  });

// Post belongsTo Author
Post.belongsTo(Author, {
    foreignKey: 'post_id',
  });

// Author have many Posts
Author.hasMany(Post, {
    foreignKey: 'author_id',
    onDelete: 'CASCADE',
  });


module.exports = {
  Author,
  Post,
  Comment,
};
