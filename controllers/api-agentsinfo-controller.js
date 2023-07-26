const Agentinfo = require ('../models/agentsinfo')
const handleError = (res, error) => {
  res.status(500).send(error.message);
}
const getAgents = (req, res) => {
  Agentinfo
    .find()
    .sort({ createdAt: -1 })
    .then((Agents) => res.status(200).json(Agents))
    .catch((error) => handleError(res, error));
}

const addAgent = (req, res) => {
  const { stagename, localip, mac} = req.body;
  const agentinfo = new Agentinfo({ stagename, localip,mac});
  agentinfo
    .save()
    .then((Agentinfo) => res.status(200).json(Agentinfo))
    .catch((error) => handleError(res, error));
}

const getAgent = (req, res) => {
  Agentinfo
    .findById(req.params.id)
    .then((Agentinfo) => res.status(200).json(Agentinfo))
    .catch((error) => handleError(res, error));
}

const deleteAgent = (req, res) => {
  const { id } = req.params;
  Agentinfo
  .findByIdAndDelete(id)
  .then((Agentinfo) => res.status(200).json(id))
  .catch((error) => handleError(res, error));
}

const editAgent = (req, res) => {
  const {stagename, localip,mac } = req.body;
  const { id } = req.params;
  Agentinfo
    .findByIdAndUpdate(id, { stagename, localip,mac}, { new: true })
    .then((Agentinfo) => res.json(Agentinfo))
    .catch((error) => handleError(res, error));
}

module.exports = {
  getAgents,
  addAgent,
  getAgent, 
  deleteAgent,
  editAgent,
};
