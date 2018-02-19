import React, { Component } from 'react';
import { connect } from 'react-redux';
import PoseCard from './PoseCard';

const PosesDisplay = ({lists, difficultySetting, tag, poses}) => {
  const checkIfFavorite = poseId => lists && lists.Favorites && lists.Favorites.indexOf(poseId) !== -1;
  const difficultyMatch = poseDifficulty =>  difficultySetting === 'All' ? true : difficultySetting === poseDifficulty;
  const checks = pose => (tag && !checkIfFavorite(pose.id))?false:difficultyMatch(pose.difficulty);
  const filteredPoses = poses.filter(checks);
  return filteredPoses.map((pose, cardIndex) => (
    <PoseCard 
      key={cardIndex + pose.name} 
      pose={pose} 
      cardIndex={cardIndex} 
      filteredPoses={filteredPoses} 
    />
  ));
};

const mapStateToProps = ({ pose: { poses }, view: { tag, difficulty }, user: { lists, id } }) => ({ poses, tag, lists, userID: id, difficultySetting: difficulty });

export default connect(mapStateToProps)(PosesDisplay);
