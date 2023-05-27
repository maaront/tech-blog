const router = require('express').Router();
const { Author, Post, Comment } = require('../../models');

// The `/api/author` endpoint

router.get('/', (req, res) => {
  // find all authors
  // be sure to include its associated Post
  Author.findAll({ include: Post
})
  .then((authorData) => {
    res.status(200).json(authorData);
  })
  .catch((err) => {
    console.log(err);
    res.status(500).json(err);
});
});


router.get('/:id', (req, res) => {
  // find one author by its `id` value
  // be sure to include its associated Posts
  Author.findOne({ where: { id: req.params.id }, include: Post   
})
  .then((authorData) => {
    res.status(200).json(authorData);
  })
  .catch((err) => {
    console.log(err);
    res.status(500).json(err);

});
});

router.post('/', (req, res) => {
  // create a new Author
  Author.create({ user_name: req.body.user_name })
    .then((authorData) => {
      res.status(200).json(authorData);
    })
    .catch((err) => {
      console.log(err);
      res.status(500).json(err);
  
  });
  });

router.put("/:id", (req, res) => {
  // update an Author by its `id` value
  Author.update(req.body, {
      where: { id: req.params.id },
  })
      .then((authorData) => {
          res.status(200).json(authorData);
      })
      .catch((error) => {
          console.log(error);
          res.status(500).json({ message: "Internal server error" });
      });
});



router.delete('/:id', (req, res) => {
  // delete an author by its `id` value
  Author.destroy({
    where: { id: req.params.id }
  })
    .then((authorData) => {
      if (authorData === 0) {
        res.status(404).json({ message: 'No author found!' });
        return;
      }
      res.status(200).json({ message: 'Author deleted' });
    })
    .catch((error) => {
      console.log(error);
      res.status(500).json({ message: 'Internal server error' });
    });
});

module.exports = router;
