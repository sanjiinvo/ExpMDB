const KazAldy = require('../models/kazaldy');

const handleError = (res, error) => {
    res.status(500).send(error.message);
  }

  const getKazAldys = (req, res) => {
    KazAldy
    .find()
    .sort({ createdAt: -1 })
    .then((KazAldys) => res.status(200).json(KazAldys))
    .catch((error) => handleError(res, error));
}

const addKazAldy = (req, res) => {
  const { groupName, objectsNumbers, objectsNames, objectsHours, objectsCredits, objectsPoints,objectsHeader } = req.body;
  const kazAldy = new KazAldy({ groupName, objectsNumbers, objectsNames, objectsHours, objectsCredits, objectsPoints,objectsHeader });
  kazAldy
    .save()
    .then((KazAldy) => res.status(200).json(KazAldy))
    .catch((error) => handleError(res, error));
}

const getKazAldy = (req, res) => {
  KazAldy
    .findById(req.params.id)
    .then((KazAldy) => res.status(200).json(KazAldy))
    .catch((error) => handleError(res, error));
}

const deleteKazAldy = (req, res) => {
  const { id } = req.params;
  KazAldy
  .findByIdAndDelete(id)
  .then((KazAldy) => res.status(200).json(id))
  .catch((error) => handleError(res, error));
}

const editKazAldy = (req, res) => {
  const { groupName, objectsNumber, objectsNames, objectsHours, objectsCredits, objectPoints,objectsHeader } = req.body;
  const { id } = req.params;
  KazAldy
    .findByIdAndUpdate(id, { groupName, objectsNumber, objectsNames, objectsHours, objectsCredits, objectPoints,objectsHeader }, { new: true })
    .then((KazAldy) => res.json(KazAldy))
    .catch((error) => handleError(res, error));
}

module.exports = {
  getKazAldys,
  addKazAldy,
  getKazAldy,
  deleteKazAldy,
  editKazAldy,
};