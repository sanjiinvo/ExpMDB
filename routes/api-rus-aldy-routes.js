const express = require('express');

const {
    getRusAldys,
    addRusAldy,
    getRusAldy, 
    deleteRusAldy,
    editRusAldy,

}= require('../controllers/api-rus-aldy-controller ')

const router = express.Router();

// Get All Posts
router.get('/api/rusAldys', getRusAldys);
// Add New Post
router.post('/api/rusAldy/', addRusAldy);
// Get Post by ID
router.get('/api/rusAldy/:id', getRusAldy);
// Delete Post by ID
router.delete('/api/rusAldy/:id', deleteRusAldy);
// Update Post by ID
router.put('/api/rusAldy/:id', editRusAldy);

module.exports = router;