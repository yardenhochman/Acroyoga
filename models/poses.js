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
    })
    .filter(
      pose =>
        ![
          'Double Throne',
          'Side Back Bird',
          'Double Couch',
          'Back Bow',
          'Care Bear Stare',
          'Foot-To-Foot Headstand',
          'Reverse Space Needle',
          'The Archer',
          'Heart to Knees',
          'The Buddha',
          'Tree Pose on Shin',
          'Bowsprit',
          'Reverse Vishnus Couch',
          'Satellite',
          'Bird',
          'Leaf Stretch',
          'Birds Dive',
          'Chest stand',
          'Goofy Goofy Foot to Foot',
          'Sticky Lab',
          'Ostrich Lab',
          'Low Reverse Hand to Hand',
          'Double Stag Counter Balance',
          'Bird on Hands',
          'Foot Sirsasana',
          'Double-Base Hand to Hand',
          'Pike Pyramid',
          'High Foot-to-Hand',
          'Baby Hand to Hand',
          'Bluejay',
          'Double Knee Drop',
          'Reverse Tuck Sit',
          'Pasarita Twist',
          'Table Top',
          'Throne',
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
          'Boredstand',
          'Super Yogi Twist',
          'Reverse Back Plank',
          'Whale',
          'Reverse Shoulder Stand',
          'Mermaid',
          'Reverse Tittibhasana',
          'Reverse Prayer',
          'Side Star',
          'Little Mermaid',
          'Nataraj',
          'Straddle Bat',
          'Croc',
          'Vishnus Couch',
          'Leaf Twist',
          'Front Plank',
          'Foot-to-Foot',
          'Reverse Star',
          'Couch',
          'Free Shoulder Stand',
          'Tittibhasana',
          'Back Bird',
          'Dragonfly',
          'Mono-Limb Reverse Star',
          'Floating Camel',
          'Mono Foot to Foot',
        ].includes(pose.name),
    );
};

module.exports = Poses;
