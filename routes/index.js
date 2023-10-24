const express = require('express');
const router = express.Router();

// Import data.json file:
const { projects } = require('../data/data.json');

router.get('/', (req, res) => {
    res.render('index', { projects });
});

router.get('/about', (req, res) => {
    res.render('about');
});

module.exports = router;
