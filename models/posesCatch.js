var fs = require('fs');

const removeSpacesInObjectKeys = json => {
  const keyValues = Object.keys(json).map(key => {
    const newKey = key.replace(/\s+/g, '_');
    return { [newKey]: json[key] };
  });
  return Object.assign({}, ...keyValues);
};

const content = fs.readFileSync('../output.json');
const poses = JSON.parse(content);
const iterate = list => {
  return list.map(listObject => removeSpacesInObjectKeys(listObject));
};
const prepareDB = poseList => {
  return poseList.map(pose => {
    return '(' + pose.title + ',' + pose.Position_Type + ',' + pose.Difficulty + ',' + pose.Number_of_Persons + ',' + pose.img + ')';
  });
}  
const newPoseList = iterate(poses);
const dbPoseList = prepareDB(newPoseList);

const writeFile = string => {
  fs.writeFile('dbPrepare.json', JSON.stringify(dbPoseList, null, 4), function(err) {
    console.log('File successfully written! - Check your project directory for the output.json file');
  });
};
writeFile(dbPoseList);
module.exports = newPoseList;

/* 
TODO:
Transfer functionality to scraper
*/
