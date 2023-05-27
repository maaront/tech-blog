const router = require('express').Router();
const path = require('path');

// This is the get route
router.get('/', (req, res) => {
    res.render('listing');
});

module.exports = router;