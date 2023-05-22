const express = require('express');

const {
    getKazishis,
    addKazishi,
    getKazishi, 
    deleteKazishi,
    editKazishi,
}= require('../controllers/api-kaz-ishi-controller')

const router = express.Router();

// Get All Posts
router.get('/api/kazishis', getKazishis);
// Add New Post
router.post('/api/kazishi/', addKazishi);
// Get Post by ID
router.get('/api/kazishi/:id', getKazishi);
// Delete Post by ID
router.delete('/api/kazishi/:id', deleteKazishi);
// Update Post by ID
router.put('/api/kazishi/:id', editKazishi);

module.exports = router;