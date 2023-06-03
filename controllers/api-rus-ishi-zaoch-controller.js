const RusishiZaoch = require('../models/rusishiZaoch');

const handleError = (res, error) => {
    res.status(500).send(error.message);
  }

  const getRusishiZaochs = (req, res) => {
  RusishiZaoch
    .find()
    .sort({ createdAt: -1 })
    .then((RusishiZaochs) => res.status(200).json(RusishiZaochs))
    .catch((error) => handleError(res, error));
}

const addRusishiZaoch = (req, res) => {
  const { groupName, objectsNumbers, objectsNames, objectsHours, objectsCredits, objectsPoints,objectsHeader } = req.body;
  const rusishiZaoch = new RusishiZaoch({ groupName, objectsNumbers, objectsNames, objectsHours, objectsCredits, objectsPoints,objectsHeader });
  rusishiZaoch
    .save()
    .then((RusishiZaoch) => res.status(200).json(RusishiZaoch))
    .catch((error) => handleError(res, error));
}

const getRusishiZaoch = (req, res) => {
  RusishiZaoch
    .findById(req.params.id)
    .then((RusishiZaoch) => res.status(200).json(RusishiZaoch))
    .catch((error) => handleError(res, error));
}

const deleteRusishiZaoch = (req, res) => {
  const { id } = req.params;
  RusishiZaoch
  .findByIdAndDelete(id)
  .then((RusishiZaoch) => res.status(200).json(id))
  .catch((error) => handleError(res, error));
}

const editRusishiZaoch = (req, res) => {
  const { groupName, objectsNumber, objectsNames, objectsHours, objectsCredits, objectPoints,objectsHeader } = req.body;
  const { id } = req.params;
  RusishiZaoch
    .findByIdAndUpdate(id, { groupName, objectsNumber, objectsNames, objectsHours, objectsCredits, objectPoints,objectsHeader }, { new: true })
    .then((RusishiZaoch) => res.json(RusishiZaoch))
    .catch((error) => handleError(res, error));
}

module.exports = {
  getRusishiZaochs,
  addRusishiZaoch,
  getRusishiZaoch, 
  deleteRusishiZaoch,
  editRusishiZaoch,
};