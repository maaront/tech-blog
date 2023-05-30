const router = require('express').Router();
const { Author, Post, Comment } = require('../../models');

// The `/post` endpoint

router.get('/', (req, res) => {
  Post.findAll({ 
    include: [Author, Comment]
  })
 .then((postData) => {
  const posts = postData.map(post => post.get({ plain: true }));

  console.log(posts);
  console.log(postData);

  res.render('../views/listing', { posts });
})
})



router.get('/:id', (req, res) => {
  // find one post by its `id` value
  // be sure to include its associated Author and Comments
  Post.findOne({ where: { id: req.params.id }, include: Author, Comment
})
  .then((postData) => {
    res.status(200).json(postData);
  })
  .catch((err) => {
    console.log(err);
    res.status(500).json(err);

});
});

router.post('/', (req, res) => {
  // create a new Post
  Post.create({ post_title: req.body.post_title, post_body: req.body.post_body, author_id: req.body.author_id })
    .then((postData) => {
      res.status(200).json(postData);
    })
    .catch((err) => {
      console.log(err);
      res.status(500).json(err);
  
  });
  });

router.put("/:id", (req, res) => {
  // update a Post by its `id` value
  Post.update(req.body, {
      where: { id: req.params.id },
  })
      .then((postData) => {
          res.status(200).json({ message: 'Post updated' }, postData);
      })
      .catch((error) => {
          console.log(error);
          res.status(500).json({ message: "Internal server error" });
      });
});



router.delete('/:id', (req, res) => {
  // delete a Post by its `id` value
  Post.destroy({
    where: { id: req.params.id }
  })
    .then((postData) => {
      if (postData === 0) {
        res.status(404).json({ message: 'No post found' });
        return;
      }
      res.status(200).json({ message: 'Post deleted' });
    })
    .catch((error) => {
      console.log(error);
      res.status(500).json({ message: 'Internal server error' });
    });
});

module.exports = router;
