import React, { Component } from 'react';
import { connect } from 'react-redux';

import { StyleRoot } from 'radium'
import Radium from '../../../../../ConfiguredRadium';
import Media from 'react-media';
import styler from 'react-styling';

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
    
    const cardDetails = { pose, isClose: this.checkCloseness(2), subtitle: this.subtitle() };
    return <StyleRoot key={pose.img} style={cardStyle.card}>
          <Media query={{ minWidth: 900 }}>
            <PC cardDetails={cardDetails} />
          </Media>
          <Media query={{ minWidth: 450, maxWidth: 900 }}>
            <Landscape cardDetails={cardDetails} />
          </Media>
          <Media query={{ maxWidth: 450 }}>
            <Portrait cardDetails={cardDetails} />
          </Media>
      </StyleRoot>;
  };
}

const mapStateToProps = state => {
  const { pose: { poses }, view: { difficulty, tag, currentSlide }, user: { name, lists, id } } = state;
  return { poses, difficultySetting: difficulty, userName: name, tag, currentSlide, lists, userID: id };
};

const reduxed = connect(mapStateToProps)(PoseCard);

export default Radium(reduxed);


var Phone_Landscape = '@media (min-width: 420px) and (max-width: 1000px)';
var cardStyle = styler`
  card
    display: flex
    align-items: center
    align-content: center
    justify-content: center
    width: 100%
    background-color: white
    float: left
    position: relative
    place-content: center
    text-align: center
    height:85vh
    ${Phone_Landscape}
      height:100vh
`;