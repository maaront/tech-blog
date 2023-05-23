const router = require('express').Router();
const authorRoutes = require('./author-routes');
const commentRoutes = require('./comment-routes');
const postRoutes = require('./post-routes');

router.use('/authors', authorRoutes);
router.use('/comments', commentRoutes);
router.use('/posts', postRoutes);

module.exports = router;
