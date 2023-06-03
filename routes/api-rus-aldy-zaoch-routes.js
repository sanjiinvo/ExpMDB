const express = require('express');

const {
    getRusAldyZaochs,
    addRusAldyZaoch,
    getRusAldyZaoch, 
    deleteRusAldyZaoch,
    editRusAldyZaoch,

}= require('../controllers/api-rus-aldy-zaoch-controller ')

const router = express.Router();

// Get All Posts
router.get('/api/RusAldyZaochs', getRusAldyZaochs);
// Add New Post
router.post('/api/RusAldyZaoch/', addRusAldyZaoch);
// Get Post by ID
router.get('/api/RusAldyZaoch/:id', getRusAldyZaoch);
// Delete Post by ID
router.delete('/api/RusAldyZaoch/:id', deleteRusAldyZaoch);
// Update Post by ID
router.put('/api/RusAldyZaoch/:id', editRusAldyZaoch);

module.exports = router;