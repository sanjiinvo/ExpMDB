const express = require('express');
const {
  getDipkoks,
  addDipkok,
  getDipkok, 
  deleteDipkok,
  editDipkok,
} = require('../controllers/api-dipkok-controller ');

const router = express.Router();

// Get All Dipkoks
router.get('/api/dipkoks', getDipkoks);
// Add New Dipkok
router.post('/api/dipkok/', addDipkok);
// Get Dipkok by ID
router.get('/api/dipkok/:id', getDipkok);
// Delete Dipkok by ID
router.delete('/api/dipkok/:id', deleteDipkok);
// Update Dipkok by ID
router.put('/api/dipkok/:id', editDipkok);

module.exports = router;
