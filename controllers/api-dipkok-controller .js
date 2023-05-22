const Dipkok = require('../models/dipkok');

const handleError = (res, error) => {
  res.status(500).send(error.message);
}

const getDipkoks = (req, res) => {
  Dipkok
    .find()
    .sort({ createdAt: -1 })
    .then((Dipkoks) => res.status(200).json(Dipkoks))
    .catch((error) => handleError(res, error));
}

const addDipkok = (req, res) => {
  const { groupName, objectsLeftside, objectsRightside } = req.body;
  const dipkok = new Dipkok({ groupName, objectsLeftside, objectsRightside});
  dipkok
    .save()
    .then((Dipkok) => res.status(200).json(Dipkok))
    .catch((error) => handleError(res, error));
}

const getDipkok = (req, res) => {
  Dipkok
    .findById(req.params.id)
    .then((Dipkok) => res.status(200).json(Dipkok))
    .catch((error) => handleError(res, error));
}

const deleteDipkok = (req, res) => {
  const { id } = req.params;
  Dipkok
  .findByIdAndDelete(id)
  .then((Dipkok) => res.status(200).json(id))
  .catch((error) => handleError(res, error));
}

const editDipkok = (req, res) => {
  const {groupName, objectsLeftside, objectsRightside } = req.body;
  const { id } = req.params;
  Dipkok
    .findByIdAndUpdate(id, { groupName, objectsLeftside, objectsRightside }, { new: true })
    .then((Dipkok) => res.json(Dipkok))
    .catch((error) => handleError(res, error));
}

module.exports = {
  getDipkoks,
  addDipkok,
  getDipkok, 
  deleteDipkok,
  editDipkok,
};
