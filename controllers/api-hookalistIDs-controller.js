const HookaTastesIDs = require('../models/hookaWorkingListId');

const handleError = (res, error) => {
  res.status(500).send(error.message);
}

const getHookaTastesIDs = (req, res) => {
  HookaTastesIDs
    .find()
    .sort({ createdAt: -1 })
    .then((HookaTastesIDs) => res.status(200).json(HookaTastesIDs))
    .catch((error) => handleError(res, error));
}

const addHookaTastesIDs = (req, res) => {
  const { TasteName, TasteID } = req.body;
  const hookaTastesIDs = new HookaTastesIDs({ TasteName, TasteID, });
  hookaTastesIDs
    .save()
    .then((HookaTastesIDs) => res.status(200).json(HookaTastesIDs))
    .catch((error) => handleError(res, error));
}

const getHookaTastesID = (req, res) => {
  Dipkok
    .findById(req.params.id)
    .then((HookaTastesIDs) => res.status(200).json(HookaTastesIDs))
    .catch((error) => handleError(res, error));
}

const deleteHookaTastesIDs = (req, res) => {
  const { id } = req.params;
  HookaTastesIDs
  .findByIdAndDelete(id)
  .then((HookaTastesIDs) => res.status(200).json(id))
  .catch((error) => handleError(res, error));
}

const editHookaTastesIDs = (req, res) => {
  const {TasteName, TasteID } = req.body;
  const { id } = req.params;
  HookaTastesIDs
    .findByIdAndUpdate(id, { TasteName, TasteID}, { new: true })
    .then((HookaTastesIDs) => res.json(HookaTastesIDs))
    .catch((error) => handleError(res, error));
}

module.exports = {
  getHookaTastesIDs,
  addHookaTastesIDs,
  getHookaTastesID,
  deleteHookaTastesIDs,
  editHookaTastesIDs
};
