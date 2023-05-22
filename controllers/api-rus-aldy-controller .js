const RusAldy = require('../models/rusaldy');

const handleError = (res, error) => {
    res.status(500).send(error.message);
  }

  const getRusAldys = (req, res) => {
    RusAldy
    .find()
    .sort({ createdAt: -1 })
    .then((RusAldys) => res.status(200).json(RusAldys))
    .catch((error) => handleError(res, error));
}

const addRusAldy = (req, res) => {
  const { groupName, objectsNumbers, objectsNames, objectsHours, objectsCredits, objectsPoints,objectsHeader } = req.body;
  const rusAldy = new RusAldy({ groupName, objectsNumbers, objectsNames, objectsHours, objectsCredits, objectsPoints,objectsHeader });
  rusAldy
    .save()
    .then((RusAldy) => res.status(200).json(RusAldy))
    .catch((error) => handleError(res, error));
}

const getRusAldy = (req, res) => {
  RusAldy
    .findById(req.params.id)
    .then((RusAldy) => res.status(200).json(RusAldy))
    .catch((error) => handleError(res, error));
}

const deleteRusAldy = (req, res) => {
  const { id } = req.params;
  RusAldy
  .findByIdAndDelete(id)
  .then((RusAldy) => res.status(200).json(id))
  .catch((error) => handleError(res, error));
}

const editRusAldy = (req, res) => {
  const { groupName, objectsNumber, objectsNames, objectsHours, objectsCredits, objectPoints,objectsHeader } = req.body;
  const { id } = req.params;
  RusAldy
    .findByIdAndUpdate(id, { groupName, objectsNumber, objectsNames, objectsHours, objectsCredits, objectPoints,objectsHeader }, { new: true })
    .then((RusAldy) => res.json(RusAldy))
    .catch((error) => handleError(res, error));
}

module.exports = {
  getRusAldys,
  addRusAldy,
  getRusAldy,
  deleteRusAldy,
  editRusAldy,
};