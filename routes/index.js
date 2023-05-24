const router = require('express').Router();
const authorRoutes = require('./author-route');
const commentRoutes = require('./comment-route');
const postRoutes = require('./post-route');

router.use('/authors', authorRoutes);
router.use('/comments', commentRoutes);
router.use('/posts', postRoutes);


router.use((req, res) => {
  res.send("<h1>Wrong Route!</h1>")
});

module.exports = router;
