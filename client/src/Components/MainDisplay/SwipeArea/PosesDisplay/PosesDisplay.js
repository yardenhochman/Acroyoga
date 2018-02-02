import React from 'react';
import { connect } from 'react-redux';
import PoseCard from './PoseCard/poseCard';

const PosesDisplay = props => {
  const { poses, tag, lists } = props;

  const favoritesList = lists && lists.Favorites;
  const checkIfFavorite = poseId => favoritesList && favoritesList.indexOf(poseId) !== -1;
  const checks = pose => {
    const { difficultySetting } = props;
    const tagMatch = tag ? checkIfFavorite(Number(pose.id)) : true;
    const difficultyMatch = difficultySetting === 'All' ? true : difficultySetting === pose.difficulty;
    return tagMatch && difficultyMatch;
  };

  return poses
    .filter(checks)
    .map((pose, cardIndex) => <PoseCard key={cardIndex + pose.name} pose={pose} cardIndex={cardIndex} />);
};

const mapStateToProps = state => {
  const { pose: { poses }, view: { tag, difficulty }, user: { lists, id } } = state;
  return { poses, tag, lists, userID: id, difficultySetting: difficulty };
};

export default connect(mapStateToProps)(PosesDisplay);
