const { Post } = require('../models');

const postData = [
  {
    post_body: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit. Nulla auctor nunc vel libero efficitur varius. Sed dignissim nunc non turpis vestibulum, eget ullamcorper lacus ullamcorper. Mauris ac facilisis ex, at sagittis mauris. Nulla commodo luctus tincidunt. Proin laoreet lacus a ex feugiat, eu sagittis purus consequat. Donec consectetur tristique massa, a fringilla ex cursus nec.',
    author_id: 1,
    post_title: 'Lorem Ipsum',
  },
  {
    post_body: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit. Nulla auctor nunc vel libero efficitur varius. Sed dignissim nunc non turpis vestibulum, eget ullamcorper lacus ullamcorper. Mauris ac facilisis ex, at sagittis mauris. Nulla commodo luctus tincidunt. Proin laoreet lacus a ex feugiat, eu sagittis purus consequat. Donec consectetur tristique massa, a fringilla ex cursus nec.',
    author_id: 5,
    post_title: 'Lorem Ipsum',
  },
  {
    post_body: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit. Nulla auctor nunc vel libero efficitur varius. Sed dignissim nunc non turpis vestibulum, eget ullamcorper lacus ullamcorper. Mauris ac facilisis ex, at sagittis mauris. Nulla commodo luctus tincidunt. Proin laoreet lacus a ex feugiat, eu sagittis purus consequat. Donec consectetur tristique massa, a fringilla ex cursus nec.',
    author_id: 4,
    post_title: 'Lorem Ipsum',
  },
  {
    post_body: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit. Nulla auctor nunc vel libero efficitur varius. Sed dignissim nunc non turpis vestibulum, eget ullamcorper lacus ullamcorper. Mauris ac facilisis ex, at sagittis mauris. Nulla commodo luctus tincidunt. Proin laoreet lacus a ex feugiat, eu sagittis purus consequat. Donec consectetur tristique massa, a fringilla ex cursus nec.',
    author_id: 3,
    post_title: 'Lorem Ipsum',
  },
  {
    post_body: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit. Nulla auctor nunc vel libero efficitur varius. Sed dignissim nunc non turpis vestibulum, eget ullamcorper lacus ullamcorper. Mauris ac facilisis ex, at sagittis mauris. Nulla commodo luctus tincidunt. Proin laoreet lacus a ex feugiat, eu sagittis purus consequat. Donec consectetur tristique massa, a fringilla ex cursus nec.',
    author_id: 2,
    post_title: 'Lorem Ipsum',
  },
];

const seedPosts = () => Post.bulkCreate(postData);

module.exports = seedPosts;
