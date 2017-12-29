const poses = require(`../models/poses`);

const posesController = {};

posesController.Random = (req, res, next) => {
  const randomIndex = Math.floor(
    Math.random() * poses.length
  );
  return poses[randomIndex];
};
module.exports = posesController;