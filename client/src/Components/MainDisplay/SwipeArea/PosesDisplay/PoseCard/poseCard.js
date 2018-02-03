import React, { Component } from 'react';
import { connect } from 'react-redux';
import * as actionTypes from '../../../../../store/actions';

import Media from 'react-media';
import { Card } from 'material-ui/Card';

import PC from './Views/DesktopView/desktopCard';
import Portrait from './Views/MobileView/mobilePortraitCard';
import Landscape from './Views/MobileView/mobileLandscapeCard';

class PoseCard extends Component {
  checkCloseness = preload => {
    const { cardIndex, currentSlide, filteredPoses } = this.props;
    const distance = Math.abs(cardIndex - currentSlide);
    return distance < preload || distance > filteredPoses.length - preload;
  };
  subtitle = () => {
    const { difficultySetting, pose: { difficulty } } = this.props;
    return `${difficultySetting === 'All' ? `Difficulty: ${difficulty}` : ''}`;
  };
  render = () => {
    console.log('PoseCard updates')
    const { pose } = this.props;
    const cardStyle = {
      display: 'flex',
      alignItems: 'center',
      alignContent: 'center',
      justifyContent: 'center',
      width: '50vw',
      backgroundColor: 'white',
      float: 'left',
      position: 'relative',
      display: 'flex',
      alignItems: 'center',
      placeContent: 'center',
    };

    const cardDetails = { pose, isClose: this.checkCloseness(2), subtitle: this.subtitle() };
    return (
      <Card style={cardStyle} key={pose.img} className="poseCard Cards">
        <Media query={{ minWidth: 900 }}><PC cardDetails={cardDetails} /></Media>;
        <Media query={{ minWidth: 450, maxWidth: 900 }}><Landscape cardDetails={cardDetails} /></Media>
        <Media query={{ maxWidth: 450 }}><Portrait cardDetails={cardDetails} /></Media>
      </Card>
    );
  };
}

const mapStateToProps = state => {
  const { pose: { poses }, view: { difficulty, tag, currentSlide }, user: { name, lists, id } } = state;
  return { poses, difficultySetting: difficulty, userName: name, tag, currentSlide, lists, userID: id };
};

const mapDispatchToProps = dispatch => {
  const { COLLECT_POSE, DUMP_POSE } = actionTypes;
  return {
    addToUserList: (pose_id, listName) =>
      dispatch({
        type: COLLECT_POSE,
        pose_id,
        listName,
      }),
    removeFromUserList: (pose_id, listName) =>
      dispatch({
        type: DUMP_POSE,
        pose_id,
        listName,
      }),
  };
};

export default connect(mapStateToProps, mapDispatchToProps)(PoseCard);
