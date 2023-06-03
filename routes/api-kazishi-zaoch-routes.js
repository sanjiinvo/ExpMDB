const express = require('express');

const {
    getKazishiZaochs,
    addKazishiZaoch,
    getKazishiZaoch, 
    deleteKazishiZaoch,
    editKazishiZaoch,
}= require('../controllers/api-kaz-ishi-zaoch-controller')

const router = express.Router();

// Get All Posts
router.get('/api/KazishiZaochs', getKazishiZaochs);
// Add New Post
router.post('/api/KazishiZaoch/', addKazishiZaoch);
// Get Post by ID
router.get('/api/KazishiZaoch/:id', getKazishiZaoch);
// Delete Post by ID
router.delete('/api/KazishiZaoch/:id', deleteKazishiZaoch);
// Update Post by ID
router.put('/api/KazishiZaoch/:id', editKazishiZaoch);

module.exports = router;