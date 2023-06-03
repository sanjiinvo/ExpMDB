const express = require('express');

const {
    getKazAldyZaochs,
    addKazAldyZaoch,
    getKazAldyZaoch, 
    deleteKazAldyZaoch,
    editKazAldyZaoch,

}= require('../controllers/api-kaz-aldy-zaoch-controller ')

const router = express.Router();

// Get All Posts
router.get('/api/KazAldyZaochs', getKazAldyZaochs);
// Add New Post
router.post('/api/KazAldyZaoch/', addKazAldyZaoch);
// Get Post by ID
router.get('/api/KazAldyZaoch/:id', getKazAldyZaoch);
// Delete Post by ID
router.delete('/api/KazAldyZaoch/:id', deleteKazAldyZaoch);
// Update Post by ID
router.put('/api/KazAldyZaoch/:id', editKazAldyZaoch);

module.exports = router;