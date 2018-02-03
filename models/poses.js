const db = require('../db/config');

const Poses = {};

Poses.AllPoses = async () => {
  const result = await db.query(`
  SELECT * FROM poses
  order by random()
  `)
  
  return result.map(pose => {
    pose.id = Number(pose.id);
    return pose;
    });
};

module.exports = Poses;
