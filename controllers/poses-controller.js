const Poses = require(`../models/poses`);

const posesController = {};

posesController.Random = (req, res, next) => {
  Poses.FindAll()
    .then(poses => {
      console.log('Poses.FindAll results(poses-controller):', poses);
      const numOfPoses = poses.length;
      const randomIndex = Math.floor(Math.random() * numOfPoses);
      console.log("this is the random index", randomIndex)
      //return poses[randomIndex];
      Poses.FindPoseById(randomIndex)
        .then(pose => {
          console.log(pose)
          res.json({
            message: 'I got your random pose here (poses-controller)',
            data: pose,
          });
        })
        .catch(err => console.log(err));
    })
    .catch(err => console.log(err));
};
module.exports = posesController;
