const seedAuthors = require('./author-seeds');
const seedComments = require('./comment-seeds');
const seedPosts = require('./post-seeds');
const seedPostComments = require('./post-comment-seeds');

const sequelize = require('../config/connection');

const seedAll = async () => {
  await sequelize.sync({ force: true });
  console.log('\n----- DATABASE SYNCED -----\n');
  await seedAuthors();
  console.log('\n----- AUTHORS SEEDED -----\n');

  await seedPosts();
  console.log('\n----- POSTS SEEDED -----\n');

  await seedComments();
  console.log('\n----- COMMENTS SEEDED -----\n');

  await seedPostComments();
  console.log('\n----- POST COMMENTS SEEDED -----\n');

  process.exit(0);
};

seedAll();
