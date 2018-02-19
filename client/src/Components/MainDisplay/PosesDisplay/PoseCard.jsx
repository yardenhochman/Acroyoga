import React from 'react';
import { connect } from 'react-redux';
import { StyleRoot } from 'radium'
import Media from 'react-media';
import styler from 'react-styling';
import VisibilitySensor from 'react-visibility-sensor';
import Radium from '../../../ConfiguredRadium';
import LoadDisplay from '../../UI/Loader';
import Heart from './Heart';
import {
  Desktop,
  Phone_Landscape,
  Phone_Portrait,
} from '../../../DeviceRules';

const PoseCard = ({ pose:{img, difficulty, id, name,}, difficultySetting, filteredPoses, currentSlide, cardIndex }) => {
  const checkCloseness = preload => {
    const distance = Math.abs(cardIndex - currentSlide);
    return distance < preload || distance > filteredPoses.length - preload;
  };    
    return <StyleRoot key={img} style={style.card}>
        {!checkCloseness(2) ? <div /> : <React.Fragment>
            <VisibilitySensor>
              <div>
                <picture>
                  <source 
                    srcSet={img.replace(/(?:upload).+\//, 'upload/w_2000/')} 
                    media={Desktop} 
                  />
                  <img 
                    src={img.replace(/(?:upload).+\//, 'upload/w_1000/')} 
                    style={style.image} 
                    alt={'Loading...'} 
                    loader={LoadDisplay} 
                  />
                </picture>
                <Media query={`not ${Phone_Landscape}`}>
                  <Heart 
                    key={id + 'heart'} 
                    poseID={id} 
                  />
                </Media>
              </div>
            </VisibilitySensor>
            <Media query={`not ${Phone_Landscape}`}>
              <div style={style.details}>
                <div style={style.text_area}>
                  <h1 style={style.title}>
                    {name}
                  </h1>
                  <p style={style.subtitle}>
                    {`${difficultySetting === 'All' ? `Difficulty: ${difficulty}` : ''}`}
                  </p>
                </div>
              </div>
            </Media>
          </React.Fragment>}
      </StyleRoot>;
  };

const mapStateToProps = ({ pose: { poses }, view: { difficulty, tag, currentSlide }, user: { name, lists, id } }) => ({ poses, difficultySetting: difficulty, userName: name, tag, currentSlide, lists, userID: id });

const reduxed = connect(mapStateToProps)(PoseCard);

export default Radium(reduxed);

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