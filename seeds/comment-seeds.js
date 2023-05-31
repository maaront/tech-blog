const { Comment } = require('../models');

const commentData = [
  {
    comment_body: 'Love this post!',
    post_id: 2,
  },
  {
    comment_body: 'Would love to hear more on this.',
    post_id: 2,
  },
  {
    comment_body: 'Thanks for sharing!',
    post_id: 1,
  },
  {
    comment_body: 'Great post!',
    post_id: 3,
  },
  {
    comment_body: 'This is a great resource!',
    post_id: 4,
  },
  {
    comment_body: 'Very helpful.',
    post_id: 5,
  },
  {
    comment_body: 'This is also a great post!',
    post_id: 5,
  },
  {
    comment_body: 'I completely agree with this.',
    post_id: 3,
  },
];

const seedComments = () => Comment.bulkCreate(commentData);

module.exports = seedComments;
