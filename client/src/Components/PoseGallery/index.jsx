import React from 'react';
import Media from 'react-media';
import Navigation from '../UI/Navigation';
import SwipeUI from '../UI/SwipeUI';
import { Desktop } from '../../DeviceRules';
import PosesFilter from './PoseFilter';
import { connect } from 'react-redux';
import {SET_SLIDE_INDEX} from '../../store/actions';

const PoseGallery = ({ poses, tag, difficulty, setSlide }) => {
  let swipe = null;
  const next = () => swipe.next();
  const prev = () => swipe.prev();
  return (
    <div style={{height: '92vh'}} className="pose-gallery">
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
    </div>
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

