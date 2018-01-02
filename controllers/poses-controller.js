const Poses = require(`../models/poses`);

const posesController = {};

posesController.Random = (req, res, next) => {
  Poses.RandomPoses()
    .then(poses => {
      res.json({
        message: 'I got your random pose here (poses-controller)',
        data: poses,
      });
    })
    .catch(err => console.log(err));
};
posesController.Filtered = (req, res, next) => {
  const { filter, value } = req.params;
  console.log(filter, value);
  Poses.FilteredPoses(filter, value)
    .then(poses => {
      console.log(poses);
      res.json({
        message: 'I got your random pose here (poses-controller)',
        data: poses,
      });
    })
    .catch(err => console.log(err));
};

module.exports = posesController;
