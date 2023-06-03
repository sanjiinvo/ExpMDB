const KazAldyZaoch = require('../models/kazaldyZaoch');

const handleError = (res, error) => {
    res.status(500).send(error.message);
  }

  const getKazAldyZaochs = (req, res) => {
    KazAldyZaoch
    .find()
    .sort({ createdAt: -1 })
    .then((KazAldyZaochs) => res.status(200).json(KazAldyZaochs))
    .catch((error) => handleError(res, error));
}

const addKazAldyZaoch = (req, res) => {
  const { groupName, objectsNumbers, objectsNames, objectsHours, objectsCredits, objectsPoints,objectsHeader } = req.body;
  const kazAldyZaoch = new KazAldyZaoch({ groupName, objectsNumbers, objectsNames, objectsHours, objectsCredits, objectsPoints,objectsHeader });
  kazAldyZaoch
    .save()
    .then((KazAldyZaoch) => res.status(200).json(KazAldyZaoch))
    .catch((error) => handleError(res, error));
}

const getKazAldyZaoch = (req, res) => {
  KazAldyZaoch
    .findById(req.params.id)
    .then((KazAldyZaoch) => res.status(200).json(KazAldyZaoch))
    .catch((error) => handleError(res, error));
}

const deleteKazAldyZaoch = (req, res) => {
  const { id } = req.params;
  KazAldyZaoch
  .findByIdAndDelete(id)
  .then((KazAldyZaoch) => res.status(200).json(id))
  .catch((error) => handleError(res, error));
}

const editKazAldyZaoch = (req, res) => {
  const { groupName, objectsNumber, objectsNames, objectsHours, objectsCredits, objectPoints,objectsHeader } = req.body;
  const { id } = req.params;
  KazAldyZaoch
    .findByIdAndUpdate(id, { groupName, objectsNumber, objectsNames, objectsHours, objectsCredits, objectPoints,objectsHeader }, { new: true })
    .then((KazAldyZaoch) => res.json(KazAldyZaoch))
    .catch((error) => handleError(res, error));
}

module.exports = {
  getKazAldyZaochs,
  addKazAldyZaoch,
  getKazAldyZaoch,
  deleteKazAldyZaoch,
  editKazAldyZaoch,
};