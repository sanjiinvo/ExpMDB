const express = require('express');

const {
    getRusishiZaochs,
    addRusishiZaoch,
    getRusishiZaoch, 
    deleteRusishiZaoch,
    editRusishiZaoch,
}= require('../controllers/api-rus-ishi-zaoch-controller')

const router = express.Router();

// Get All Posts
router.get('/api/RusishiZaochs', getRusishiZaochs);
// Add New Post
router.post('/api/RusishiZaoch/', addRusishiZaoch);
// Get Post by ID
router.get('/api/RusishiZaoch/:id', getRusishiZaoch);
// Delete Post by ID
router.delete('/api/RusishiZaoch/:id', deleteRusishiZaoch);
// Update Post by ID
router.put('/api/RusishiZaoch/:id', editRusishiZaoch);

module.exports = router;