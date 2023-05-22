const express = require('express');

const {
    getKazAldys,
    addKazAldy,
    getKazAldy, 
    deleteKazAldy,
    editKazAldy,

}= require('../controllers/api-kaz-aldy-controller ')

const router = express.Router();

// Get All Posts
router.get('/api/kazAldys', getKazAldys);
// Add New Post
router.post('/api/kazAldy/', addKazAldy);
// Get Post by ID
router.get('/api/kazAldy/:id', getKazAldy);
// Delete Post by ID
router.delete('/api/kazAldy/:id', deleteKazAldy);
// Update Post by ID
router.put('/api/kazAldy/:id', editKazAldy);

module.exports = router;