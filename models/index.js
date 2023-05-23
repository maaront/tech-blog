// import models
const Author = require('./Author');
const Post = require('./Post');
const Comment = require('./Comment');


// Comment belongsTo Post
  Comment.belongsTo(Post, {
    foreignKey: 'post_id',
    
  });

// Categories have many Products
// Post have many Comments
  Post.hasMany(Comment, {
    foreignKey: 'post_id',
    onDelete: 'CASCADE',
  });

// Categories have many Products
// Post has one Author
Post.hasOne(Author, {
    foreignKey: 'post_id',
  });

module.exports = {
  Author,
  Post,
  Comment,
};
