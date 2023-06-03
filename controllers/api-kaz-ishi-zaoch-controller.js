const KazishiZaoch = require('../models/KazishiZaoch');

const handleError = (res, error) => {
    res.status(500).send(error.message);
  }

  const getKazishiZaochs = (req, res) => {
    KazishiZaoch
    .find()
    .sort({ createdAt: -1 })
    .then((KazishiZaochs) => res.status(200).json(KazishiZaochs))
    .catch((error) => handleError(res, error));
}

const addKazishiZaoch = (req, res) => {
  const { groupName, objectsNumbers, objectsNames, objectsHours, objectsCredits, objectsPoints,objectsHeader } = req.body;
  const kazishiZaoch = new KazishiZaoch({ groupName, objectsNumbers, objectsNames, objectsHours, objectsCredits, objectsPoints,objectsHeader });
  kazishiZaoch
    .save()
    .then((KazishiZaoch) => res.status(200).json(KazishiZaoch))
    .catch((error) => handleError(res, error));
}

const getKazishiZaoch = (req, res) => {
  KazishiZaoch
    .findById(req.params.id)
    .then((KazishiZaoch) => res.status(200).json(KazishiZaoch))
    .catch((error) => handleError(res, error));
}

const deleteKazishiZaoch = (req, res) => {
  const { id } = req.params;
  KazishiZaoch
  .findByIdAndDelete(id)
  .then((KazishiZaoch) => res.status(200).json(id))
  .catch((error) => handleError(res, error));
}

const editKazishiZaoch = (req, res) => {
  const { groupName, objectsNumber, objectsNames, objectsHours, objectsCredits, objectPoints,objectsHeader } = req.body;
  const { id } = req.params;
  KazishiZaoch
    .findByIdAndUpdate(id, { groupName, objectsNumber, objectsNames, objectsHours, objectsCredits, objectPoints,objectsHeader }, { new: true })
    .then((KazishiZaoch) => res.json(KazishiZaoch))
    .catch((error) => handleError(res, error));
}

module.exports = {
  getKazishiZaochs,
  addKazishiZaoch,
  getKazishiZaoch,
  deleteKazishiZaoch,
  editKazishiZaoch,

  // getGroups,
  // addGroup,
  // getGroup, 
  // deleteGroup,
  // editGroup,
};