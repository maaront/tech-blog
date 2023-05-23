const { Author } = require('../models');

const authorData = [
  {
    user_name: 'Matt Turner',
  },
  {
    user_name: 'John Doe',
  },
  {
    user_name: 'Jane Doe',
  },
  {
    user_name: 'Mark Twain',
  },
  {
    user_name: 'William Shakespeare',
  },
];

const seedAuthors = () => Author.bulkCreate(authorData);

module.exports = seedAuthors;
