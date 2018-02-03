import React, { Component } from 'react';
import { connect } from 'react-redux';
import PoseCard from './PoseCard/poseCard';

class PosesDisplay extends Component {
  componentDidMount = () => this.props.resetSlide();
  checkIfFavorite = poseId => {
    const { lists } = this.props;
    return lists && lists.Favorites && lists.Favorites.indexOf(poseId) !== -1;
  };
  difficultyMatch = poseDifficulty => {
    const { difficultySetting } = this.props;
    return difficultySetting === 'All' ? true : difficultySetting === poseDifficulty;
  };
  checks = pose => {
    const { tag } = this.props;
    if (tag && !this.checkIfFavorite(pose.id)) {
      return false;
    }
    return this.difficultyMatch(pose.difficulty);
  };
  render = () => {
    if (!this.props.poses) return;
    const filteredPoses = this.props.poses.filter(this.checks);
    return filteredPoses.map((pose, cardIndex) => (
      <PoseCard key={cardIndex + pose.name} pose={pose} cardIndex={cardIndex} filteredPoses={filteredPoses} />
    ));
  };
}

const mapStateToProps = state => {
  const { pose: { poses }, view: { tag, difficulty }, user: { lists, id } } = state;
  return { poses, tag, lists, userID: id, difficultySetting: difficulty };
};

export default connect(mapStateToProps)(PosesDisplay);
