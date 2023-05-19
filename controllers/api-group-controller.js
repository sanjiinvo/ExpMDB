const Group = require('../models/group');

const handleError = (res, error) => {
    res.status(500).send(error.message);
  }

  const getGroups = (req, res) => {
  Group
    .find()
    .sort({ createdAt: -1 })
    .then((Groups) => res.status(200).json(Groups))
    .catch((error) => handleError(res, error));
}

const addGroup = (req, res) => {
  const { groupName, objectsNumbers, objectsNames, objectsHours, objectsCredits, objectsPoints,objectsHeader } = req.body;
  const group = new Group({ groupName, objectsNumbers, objectsNames, objectsHours, objectsCredits, objectsPoints,objectsHeader });
  group
    .save()
    .then((Group) => res.status(200).json(Group))
    .catch((error) => handleError(res, error));
}

const getGroup = (req, res) => {
  Group
    .findById(req.params.id)
    .then((Group) => res.status(200).json(Group))
    .catch((error) => handleError(res, error));
}

const deleteGroup = (req, res) => {
  const { id } = req.params;
  Group
  .findByIdAndDelete(id)
  .then((Group) => res.status(200).json(id))
  .catch((error) => handleError(res, error));
}

const editGroup = (req, res) => {
  const { groupName, objectsNumber, objectsNames, objectsHours, objectsCredits, objectPoints,objectsHeader } = req.body;
  const { id } = req.params;
  Group
    .findByIdAndUpdate(id, { groupName, objectsNumber, objectsNames, objectsHours, objectsCredits, objectPoints,objectsHeader }, { new: true })
    .then((Group) => res.json(Group))
    .catch((error) => handleError(res, error));
}

module.exports = {
  getGroups,
  addGroup,
  getGroup, 
  deleteGroup,
  editGroup,
};