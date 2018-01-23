const db = require('../db/config');

const Poses = {};

Poses.FindPoseById = id => {
  console.log('FindPoseById(poses.js):', id);
  return db.one(
    `
  SELECT * FROM poses
  WHERE id = $1`,
    id,
  );
};
Poses.FindPoseByName = name => {
  console.log('FindPoseByName(poses.js):', name);
  return db.one(
    `
  SELECT * FROM poses
  WHERE name = $1`,
    [name],
  );
};
Poses.FilteredPoses = (filter, value) => {
  console.log('FilteredPoses(poses.js):', filter, value);
  return db.query(
    `
  SELECT * FROM poses WHERE ${filter} = $1`,
    [value]
  );
};
//order by random()

Poses.AllPoses = () => {
  console.log('FindAll(poses.js):');
  return db.query(`
  SELECT * FROM poses
  `);
};

module.exports = Poses;

/* 
Poses tables:
 id | name | type | difficulty | number_of_people

*/
