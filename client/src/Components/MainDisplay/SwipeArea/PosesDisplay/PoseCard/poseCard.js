import React, { Component } from 'react';
import { connect } from 'react-redux';

import { StyleRoot } from 'radium'
import Radium from '../../../../../ConfiguredRadium';
import Media from 'react-media';
import styler from 'react-styling';
import VisibilitySensor from 'react-visibility-sensor';
import LoadDisplay from '../../../../UI/Loader/loader';
import Heart from './cardParts/heart';

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
    const { pose } = this.props;
    /*
    const desktopImage = pose.img.replace(/(?:upload).+\//, 'upload/w_2000/');
    const mobileImage = pose.img.replace(/(?:upload).+\//, 'upload/w_1000/');*/
    return <StyleRoot key={pose.img} style={style.card}>
        {!this.checkCloseness(2) ? <div /> : <React.Fragment>
            <VisibilitySensor>
              <div>
                {/*<picture>
              <source srcset={desktopImage} media={Desktop} />
              <img src={mobileImage} style={style.image} alt={'Loading...'} loader={LoadDisplay} />
            </picture>*/}
                <img src={pose.img} style={style.image} alt={'Loading...'} loader={LoadDisplay} />
                <Media query={`not ${Phone_Landscape}`}>
                  <Heart key={pose.id + 'heart'} poseID={pose.id} />
                </Media>
              </div>
            </VisibilitySensor>
            <Media query={`not ${Phone_Landscape}`}>
              <div style={style.details}>
                <div style={style.text_area}>
                  <h1 style={style.title}>
                    {pose.name}
                  </h1>
                  <p style={style.subtitle}>
                    {this.subtitle()}
                  </p>
                </div>
              </div>
            </Media>
          </React.Fragment>}
      </StyleRoot>;
  };
}

const mapStateToProps = state => {
  const { pose: { poses }, view: { difficulty, tag, currentSlide }, user: { name, lists, id } } = state;
  return { poses, difficultySetting: difficulty, userName: name, tag, currentSlide, lists, userID: id };
};

const reduxed = connect(mapStateToProps)(PoseCard);

export default Radium(reduxed);

var Desktop =
  `(min-device-width: 1000px)`;
var mobile_device = 'screen and (max-device-width: 999px)';
var Phone_Portrait = `${mobile_device} and (orientation: portrait)`;
var Phone_Landscape = `${mobile_device} and (orientation: landscape)`;
var style = styler`
  card
    display: flex
    flex-direction: column
    align-items: center
    align-content: center
    justify-content: center
    width: 100%
    background-color: white
    float: left
    position: relative
    place-content: center
    text-align: center
    height:90vh

    @media ${Phone_Landscape}
      height:100vh
      background-color:black

  image 

    @media ${Phone_Portrait}
      max-height: 60vh
      width: auto
      max-width: 100vw
      border-radius: 5px
      min-width: auto
      
    @media ${Phone_Landscape}
      height: 101vh
      width: auto
      max-width: 100vw
      border-radius: 5px

    @media ${Desktop}
      height: 50vw
      max-height: 70vh
      width: auto
      border-radius: 5px

  details
    width: 100%

    @media ${Phone_Portrait}
      display: grid 
      grid-template-columns: 5vw auto 5vw 
      grid-template-rows: 20% auto 
      grid-template-area: 'heart | text | .|''.|text|.' 
      
    @media ${Desktop}

  text_area
    grid-area: textArea
    grid-row: 2
    grid-column: 2

    @media ${Phone_Portrait}

  title
    grid-area: title
    font-family: Special Elite

    @media ${Phone_Portrait}
      height: 8vh  

    @media ${Desktop}
      margin-top: 2vh

  subtitle
    font-family: Roboto Condensed
    grid-area: sub
    @media ${Phone_Portrait}
      color: black
      margin-top: 1vh
    @media ${Desktop}
      font-size: 2vh
      

`;