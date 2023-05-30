const router = require('express').Router();
const path = require('path');

// This is the get route
router.get('/', (req, res) => {
    Post.findAll({ 
      include: [Author, Comment]
    })
    .then((postData) => {
      // here is where you'd console log the data
      console.log(postData);
  
      // and here is where you pass the data to your view
      res.render('listing', { posts: postData });
    })
    .catch((err) => {
      console.log(err);
      res.status(500).json(err);
    });
  });

module.exports = router;