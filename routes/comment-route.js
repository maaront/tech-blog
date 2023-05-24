const router = require('express').Router();
const { Comment, Post, Author } = require('../models');

// The `/api/comment` endpoint

router.get('/', (req, res) => {
  // find all comments
  // be sure to include its associated Post and Author
  Comment.findAll({ include: Post, Author
})
  .then((commentData) => {
    res.status(200).json(commentData);
  })
  .catch((err) => {
    console.log(err);
    res.status(500).json(err);
});
});


router.get('/:id', (req, res) => {
  // find one comment by its `id` value
  // be sure to include its associated Posts and Author
  Comment.findOne({ where: { id: req.params.id }, include: Post, Author   
})
  .then((commentData) => {
    res.status(200).json(commentData);
  })
  .catch((err) => {
    console.log(err);
    res.status(500).json(err);

});
});

router.post('/', (req, res) => {
  // create a new comment
  Comment.create({ comment_body: req.body.comment_body, post_id: req.body.post_id, author_id: req.body.author_id })
    .then((commentData) => {
      res.status(200).json(commentData);
    })
    .catch((err) => {
      console.log(err);
      res.status(500).json(err);
  
  });
  });

router.put("/:id", (req, res) => {
  // update a comment by its `id` value
  Comment.update(req.body, {
      where: { id: req.params.id },
  })
      .then((commentData) => {
          res.status(200).json(commentData);
      })
      .catch((error) => {
          console.log(error);
          res.status(500).json({ message: "Internal server error" });
      });
});



router.delete('/:id', (req, res) => {
  // delete a comment by its `id` value
  Comment.destroy({
    where: { id: req.params.id }
  })
    .then((commentData) => {
      if (commentData === 0) {
        res.status(404).json({ message: 'No comment found!' });
        return;
      }
      res.status(200).json({ message: 'Comment deleted' });
    })
    .catch((error) => {
      console.log(error);
      res.status(500).json({ message: 'Internal server error' });
    });
});

module.exports = router;
