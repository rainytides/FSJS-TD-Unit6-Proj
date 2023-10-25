const express = require('express');
const router = express.Router();

// Import data.json file:
const { projects } = require('../data/data.json');

// Route handler for project details
router.get('/:id', (req, res, next) => {
    const projectId = parseInt(req.params.id, 10);

    // If the ID is not a number or out of range, pass an error to the next middleware
    if (isNaN(projectId) || projectId < 0 || projectId >= projects.length) {
        const error = new Error('Project ID is invalid or not found');
        error.status = 400;
        return next(error);
    }

    // Render the project if there is a matching ID
    const project = projects[projectId];
    res.render('project', { project });
});

module.exports = router;
