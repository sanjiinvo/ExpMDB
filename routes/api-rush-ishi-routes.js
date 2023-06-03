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
router.get('/api/rusishizaochs', getRusishiZaochs);
// Add New Post
router.post('/api/rusishizaoch/', addRusishiZaoch);
// Get Post by ID
router.get('/api/rusishizaoch/:id', getRusishiZaoch);
// Delete Post by ID
router.delete('/api/rusishizaoch/:id', deleteRusishiZaoch);
// Update Post by ID
router.put('/api/rusishizaoch/:id', editRusishiZaoch);

module.exports = router;