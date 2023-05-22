const Kazishi = require('../models/Kazishi');

const handleError = (res, error) => {
    res.status(500).send(error.message);
  }

  const getKazishis = (req, res) => {
    Kazishi
    .find()
    .sort({ createdAt: -1 })
    .then((Kazishis) => res.status(200).json(Kazishis))
    .catch((error) => handleError(res, error));
}

const addKazishi = (req, res) => {
  const { groupName, objectsNumbers, objectsNames, objectsHours, objectsCredits, objectsPoints,objectsHeader } = req.body;
  const kazishi = new Kazishi({ groupName, objectsNumbers, objectsNames, objectsHours, objectsCredits, objectsPoints,objectsHeader });
  kazishi
    .save()
    .then((Kazishi) => res.status(200).json(Kazishi))
    .catch((error) => handleError(res, error));
}

const getKazishi = (req, res) => {
  Kazishi
    .findById(req.params.id)
    .then((Kazishi) => res.status(200).json(Kazishi))
    .catch((error) => handleError(res, error));
}

const deleteKazishi = (req, res) => {
  const { id } = req.params;
  Kazishi
  .findByIdAndDelete(id)
  .then((Kazishi) => res.status(200).json(id))
  .catch((error) => handleError(res, error));
}

const editKazishi = (req, res) => {
  const { groupName, objectsNumber, objectsNames, objectsHours, objectsCredits, objectPoints,objectsHeader } = req.body;
  const { id } = req.params;
  Kazishi
    .findByIdAndUpdate(id, { groupName, objectsNumber, objectsNames, objectsHours, objectsCredits, objectPoints,objectsHeader }, { new: true })
    .then((Kazishi) => res.json(Kazishi))
    .catch((error) => handleError(res, error));
}

module.exports = {
  getKazishis,
  addKazishi,
  getKazishi,
  deleteKazishi,
  editKazishi,

  // getGroups,
  // addGroup,
  // getGroup, 
  // deleteGroup,
  // editGroup,
};