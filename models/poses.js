const db = require('../db/config');

const Poses = {};

Poses.AllPoses = () => {
  return db.query(`
  SELECT * FROM poses
  order by random()
  `);
};

module.exports = Poses;