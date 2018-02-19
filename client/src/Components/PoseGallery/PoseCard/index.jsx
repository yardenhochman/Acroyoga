import React, {Fragment} from 'react';
import { StyleRoot } from 'radium'
import Media from 'react-media';
import styler from 'react-styling';
import Radium from '../../../ConfiguredRadium';
import {
  Desktop,
  Phone_Landscape,
  Phone_Portrait,
} from '../../../DeviceRules';
import PoseText from './PoseParts/Text';
import PictureArea from './PictureArea';
import {isClose} from '../helpers';

const PoseCard = ({ pose:{img, difficulty, id, name}, difficultySetting, filteredPoses, currentSlide, cardIndex }) => {
    return (
    <StyleRoot key={img} style={style.card}>
        {
          !isClose(2,filteredPoses,cardIndex,currentSlide) ? <div /> : (
            <Fragment>
              <PictureArea img={img} poseID={id}/>
              <Media query={`not ${Phone_Landscape}`}>
                <PoseText 
                  poseTitle={name} 
                  subtitle={`${difficultySetting === 'All' ? `Difficulty: ${difficulty}` : ''}`}
                />
              </Media>
            </Fragment>
          )
        }
      </StyleRoot>
    );
  };

export default Radium(PoseCard);

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
`;