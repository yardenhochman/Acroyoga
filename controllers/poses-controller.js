const Poses = require(`../models/poses`);

class response {
  constructor(message, data) {
    this.message = message;
    this.data = data;
  }
}

const posesController = {};

posesController.All = async (req, res, next) => {
  try {
    const poses = await Poses.AllPoses(); //all poses sorted randomly
    res.json(new response('All poses (poses-controller)', poses));
  } catch (err) { console.log(err) };
};
posesController.Filtered = async (req, res, next) => {
  const { filter, value } = req.params;
  try {
    const poses = await Poses.FilteredPoses(filter, value);
    res.json(new response('Filtered Poses (poses-controller)', poses));
  } catch (err) { console.log(err) };
};

module.exports = posesController;
