const express = require('express');
const {
  getAgents,
  addAgent,
  getAgent, 
  deleteAgent,
  editAgent,
} = require('../controllers/api-agentsinfo-controller');

const router = express.Router();

// Get All Agents
router.get('/api/Agents', getAgents);
// Add New Agent
router.post('/api/Agent', addAgent); // <-- Убран лишний слеш здесь
// Get Agent by ID
router.get('/api/Agent/:id', getAgent);
// Delete Agent by ID
router.delete('/api/Agent/:id', deleteAgent);
// Update Agent by ID
router.put('/api/Agent/:id', editAgent);

module.exports = router;