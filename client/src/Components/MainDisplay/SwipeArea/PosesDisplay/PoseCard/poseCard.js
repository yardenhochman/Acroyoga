import React, { Component } from 'react';
import { connect } from 'react-redux';

import Media from 'react-media';

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
    //console.log('PoseCard updates')
    const { pose } = this.props;
    let cardStyle = {
      display: 'flex',
      alignItems: 'center',
      alignContent: 'center',
      justifyContent: 'center',
      width: '100%',
      backgroundColor: 'white',
      float: 'left',
      position: 'relative',
      placeContent: 'center',
      textAlign: 'center',
    };
    const cardDetails = { pose, isClose: this.checkCloseness(2), subtitle: this.subtitle() };
    return <div key={pose.img} className={'poseCard'} style={cardStyle}>
        <Media query={{ minWidth: 900 }}>
          <PC cardDetails={cardDetails} />
        </Media>
        <Media query={{ minWidth: 450, maxWidth: 900 }}>
          <Landscape cardDetails={cardDetails} />
        </Media>
        <Media query={{ maxWidth: 450 }}>
          <Portrait cardDetails={cardDetails} />
        </Media>
      </div>;
  };
}

const mapStateToProps = state => {
  const { pose: { poses }, view: { difficulty, tag, currentSlide }, user: { name, lists, id } } = state;
  return { poses, difficultySetting: difficulty, userName: name, tag, currentSlide, lists, userID: id };
};



export default connect(mapStateToProps)(PoseCard);
