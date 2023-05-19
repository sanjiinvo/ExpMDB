const express = require('express');

const {
    getGroups,
    addGroup,
    getGroup, 
    deleteGroup,
    editGroup,
}= require('../controllers/api-group-controller')

const router = express.Router();

// Get All Posts
router.get('/api/groups', getGroups);
// Add New Post
router.post('/api/group/', addGroup);
// Get Post by ID
router.get('/api/group/:id', getGroup);
// Delete Post by ID
router.delete('/api/group/:id', deleteGroup);
// Update Post by ID
router.put('/api/group/:id', editGroup);

module.exports = router;