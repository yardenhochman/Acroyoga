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
    const tagMatch = tag ? this.checkIfFavorite(Number(pose.id)) : true;
    const difficultyMatch = this.difficultyMatch(pose.difficulty);
    return tagMatch && difficultyMatch;
  };
  render = () => {
    return this.props.poses
      .filter(this.checks)
      .map((pose, cardIndex) => (
        <PoseCard
          key={cardIndex + pose.name}
          pose={pose}
          cardIndex={cardIndex}
        />
      ));
  };
}

const mapStateToProps = state => {
  const { pose: { poses }, view: { tag, difficulty }, user: { lists, id } } = state;
  return { poses, tag, lists, userID: id, difficultySetting: difficulty };
};

export default connect(mapStateToProps)(PosesDisplay);
