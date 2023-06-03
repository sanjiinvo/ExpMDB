const RusAldyZaoch = require('../models/rusaldyZaoch');
console.log(123);
const handleError = (res, error) => {
    res.status(500).send(error.message);
  }

  const getRusAldyZaochs = (req, res) => {
    RusAldyZaoch
    .find()
    .sort({ createdAt: -1 })
    .then((RusAldyZaoch) => res.status(200).json(RusAldyZaoch))
    .catch((error) => handleError(res, error));
}

const addRusAldyZaoch = (req, res) => {
  const { groupName, objectsNumbers, objectsNames, objectsHours, objectsCredits, objectsPoints,objectsHeader } = req.body;
  const rusAldyZaoch = new RusAldyZaoch({ groupName, objectsNumbers, objectsNames, objectsHours, objectsCredits, objectsPoints,objectsHeader });
  rusAldyZaoch
    .save()
    .then((RusAldyZaoch) => res.status(200).json(RusAldyZaoch))
    .catch((error) => handleError(res, error));
}

const getRusAldyZaoch = (req, res) => {
  RusAldyZaoch
    .findById(req.params.id)
    .then((RusAldyZaoch) => res.status(200).json(RusAldyZaoch))
    .catch((error) => handleError(res, error));
}

const deleteRusAldyZaoch = (req, res) => {
  const { id } = req.params;
  RusAldyZaoch
  .findByIdAndDelete(id)
  .then((RusAldyZaoch) => res.status(200).json(id))
  .catch((error) => handleError(res, error));
}

const editRusAldyZaoch = (req, res) => {
  const { groupName, objectsNumber, objectsNames, objectsHours, objectsCredits, objectPoints,objectsHeader } = req.body;
  const { id } = req.params;
  RusAldyZaoch
    .findByIdAndUpdate(id, { groupName, objectsNumber, objectsNames, objectsHours, objectsCredits, objectPoints,objectsHeader }, { new: true })
    .then((RusAldyZaoch) => res.json(RusAldyZaoch))
    .catch((error) => handleError(res, error));
}

module.exports = {
  getRusAldyZaochs,
  addRusAldyZaoch,
  getRusAldyZaoch,
  deleteRusAldyZaoch,
  editRusAldyZaoch,
};