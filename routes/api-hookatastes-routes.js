const express = require('express');
const {
  getHookaTastes,
  addHookaTastes,
  getHookaTaste,
  deleteHookaTastes,
  editHookaTastes
} = require('../controllers/api-hookalist-controller ');

const router = express.Router();

// Get All hookalists
router.get('/api/hookalists', getHookaTastes);
// Add New hookalists
router.post('/api/hookalist/', addHookaTastes);
// Get hookalists by ID
router.get('/api/hookalist/:id', getHookaTaste);
// Delete hookalists by ID
router.delete('/api/hookalist/:id', deleteHookaTastes);
// Update hookalists by ID
router.put('/api/hookalist/:id',   editHookaTastes
);

module.exports = router;
