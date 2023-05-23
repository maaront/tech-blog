const { Comment } = require('../models');

const commentData = [
  {
    comment_body: 'Love this post!',
  },
  {
    comment_body: 'Would love to hear more on this.',
  },
  {
    comment_body: 'Thanks for sharing!',
  },
  {
    comment_body: 'Great post!',
  },
  {
    comment_body: 'This is a great resource!',
  },
  {
    comment_body: 'Very helpful.',
  },
  {
    comment_body: 'This is also a great post!',
  },
  {
    comment_body: 'I completely agree with this.',
  },
];

const seedComments = () => Comment.bulkCreate(commentData);

module.exports = seedComments;
