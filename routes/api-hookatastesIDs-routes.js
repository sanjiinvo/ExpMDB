const express = require('express');
const {
  getHookaTastesIDs,
  addHookaTastesIDs,
  getHookaTastesID,
  deleteHookaTastesIDs,
  editHookaTastesIDs
} = require('../controllers/api-hookalistIDs-controller');

const router = express.Router();

// Get All hookalists
router.get('/api/hookalistids', getHookaTastesIDs);
// Add New hookalists
router.post('/api/hookalistid/', addHookaTastesIDs);
// Get hookalists by ID
router.get('/api/hookalistid/:id', getHookaTastesID);
// Delete hookalists by ID
router.delete('/api/hookalistid/:id', deleteHookaTastesIDs);
// Update hookalists by ID
router.put('/api/hookalistid/:id',   editHookaTastesIDs);

module.exports = router;
