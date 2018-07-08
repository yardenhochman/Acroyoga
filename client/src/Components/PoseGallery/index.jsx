import React from 'react';
import Media from 'react-media';
import Navigation from '../UI/Navigation';
import SwipeUI from '../UI/SwipeUI';
import { Desktop } from '../../DeviceRules';
import PosesFilter from './PoseFilter';
import { connect } from 'react-redux';
import {SET_SLIDE_INDEX} from '../../store/actions';
import styled from 'styled-components';

const PoseGallery = ({ poses, tag, difficulty, setSlide }) => {
  let swipe = null;
  const next = () => swipe.next();
  const prev = () => swipe.prev();
  return (
    <PoseGalleryArea>
      <SwipeUI 
        reactSwipe={reactSwipe => (swipe = reactSwipe)}
        key={poses.length + tag + difficulty }
        updater={setSlide}
      >
        <PosesFilter />
      </SwipeUI>
      <Media query={`${Desktop}`}>
        <div>
          <Navigation
            next={next}
            prev={prev}
          />
        </div>
      </Media>
    </PoseGalleryArea>
  );
}
const mapStateToProps = ({ pose: { poses }, view: { tag, difficulty } }) => ({ poses, tag, difficulty });

const mapDispatchToProps = dispatch => ({
    setSlide: currentSlide =>
      dispatch({
        type: SET_SLIDE_INDEX,
        currentSlide,
      }),
});

export default connect(mapStateToProps,mapDispatchToProps)(PoseGallery);

const PoseGalleryArea = styled.div`
  height: 92vh;
`;