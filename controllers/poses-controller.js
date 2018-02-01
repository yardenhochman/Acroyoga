const Poses = require(`../models/poses`);

const posesController = {};

posesController.All = async (req, res, next) => {
  try {
    res.json(await Poses.AllPoses());
  } catch (err) { console.log(err) };
};

module.exports = posesController;
