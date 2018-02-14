const db = require('../db/config');

const Poses = {};

Poses.AllPoses = async () => {
  const result = await db.query(`
  SELECT * FROM poses
  order by random()
  `);

  return result
    .map(pose => {
      pose.id = Number(pose.id);
      return pose;
    })/*
    .filter(
      pose =>
        ![
          'Side Back Bird',
          'Double Couch',
          'Back Bow',
          'Care Bear Stare',
          'Foot-To-Foot Headstand',
          'Heart to Knees',
          'Bowsprit',
          'Reverse Vishnus Couch',
          'Satellite',
          'Leaf Stretch',
          'Birds Dive',
          'Goofy Goofy Foot to Foot',
          'Sticky Lab',
          'Ostrich Lab',
          'Foot Sirsasana',
          'Double-Base Hand to Hand',
          'Pike Pyramid',
          'High Foot-to-Hand',
          'Bluejay',
          'Double Knee Drop',
          'Reverse Tuck Sit',
          'Pasarita Twist',
          'Table Top',
          'Bound Twist',
          'Heart to Hands',
          'Reverse Couch',
          'Super Natural',
          'Spoon',
          'Scare Crow',
          'Reverse Throne',
          'Reverse Bat',
          'Folded Leaf',
          'Heart to Shin',
          'Hammock',
          'Headfirst Grasshopper',
          'Tuck Sit',
          'Whaka Stretch',
          'Bat',
          'Bow',
          'Super Yogi Twist',
          'Reverse Back Plank',
          'Mermaid',
          'Reverse Tittibhasana',
          'Reverse Prayer',
          'Little Mermaid',
          'Nataraj',
          'Straddle Bat',
          'Croc',
          'Vishnus Couch',
          'Leaf Twist',
          'Front Plank',
          'Foot-to-Foot',
          'Free Shoulder Stand',
          'Tittibhasana',
          'Back Bird',
          'Dragonfly',
          'Mono-Limb Reverse Star',
          'Floating Camel',
          'Mono Foot to Foot',
        ].includes(pose.name),
    );*/
};

module.exports = Poses;
