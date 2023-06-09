// import models
const Author = require('./Author.js');
const Post = require('./Post.js');
const Comment = require('./Comment.js');



// Comment belongsTo Post
  Comment.belongsTo(Post, {
    foreignKey: 'post_id',
  });

// Post have many Comments
  Post.hasMany(Comment, {
    foreignKey: 'post_id',
  });

// Post belongsTo Author
Post.belongsTo(Author, {
    foreignKey: 'author_id',
  });

// Author have many Posts
Author.hasMany(Post, {
    foreignKey: 'author_id',
  });


module.exports = {
  Author,
  Post,
  Comment,
};
