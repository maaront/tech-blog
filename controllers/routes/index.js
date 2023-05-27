const router = require('express').Router();
const authorRoutes = require('./author-route');
const commentRoutes = require('./comment-route');
const postRoutes = require('./post-route');
const listingRoutes = require('../listingCont.js')


router.use('/authors', authorRoutes);
router.use('/comments', commentRoutes);
router.use('/posts', postRoutes);
router.use('/listing', listingRoutes);

router.use((req, res) => {
  res.send("<h1>Wrong Route!</h1>")
});

module.exports = router;
