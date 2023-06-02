const HookaTastes = require('../models/hookaList');

const handleError = (res, error) => {
  res.status(500).send(error.message);
}

const getHookaTastes = (req, res) => {
  HookaTastes
    .find()
    .sort({ createdAt: -1 })
    .then((HookaTastes) => res.status(200).json(HookaTastes))
    .catch((error) => handleError(res, error));
}

const addHookaTastes = (req, res) => {
  const { TasteName, TasteBrand } = req.body;
  const hookaTastes = new HookaTastes({ TasteName, TasteBrand, });
  hookaTastes
    .save()
    .then((HookaTastes) => res.status(200).json(HookaTastes))
    .catch((error) => handleError(res, error));
}

const getHookaTaste = (req, res) => {
  Dipkok
    .findById(req.params.id)
    .then((HookaTastes) => res.status(200).json(HookaTastes))
    .catch((error) => handleError(res, error));
}

const deleteHookaTastes = (req, res) => {
  const { id } = req.params;
  HookaTastes
  .findByIdAndDelete(id)
  .then((HookaTastes) => res.status(200).json(id))
  .catch((error) => handleError(res, error));
}

const editHookaTastes = (req, res) => {
  const {TasteName, TasteBrand } = req.body;
  const { id } = req.params;
  HookaTastes
    .findByIdAndUpdate(id, { TasteName, TasteBrand}, { new: true })
    .then((HookaTastes) => res.json(HookaTastes))
    .catch((error) => handleError(res, error));
}

module.exports = {
  getHookaTastes,
  addHookaTastes,
  getHookaTaste,
  deleteHookaTastes,
  editHookaTastes
};
