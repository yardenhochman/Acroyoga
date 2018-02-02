import React from 'react';
import { connect } from 'react-redux';
import ReactSwipe from 'react-swipe';
import * as actionTypes from '../../../store/actions';
import PosesDisplay from './PosesDisplay/PosesDisplay';

const SwipeArea = ({ poses, tag, setSlide, reactSwipe, resetSlide }) => {
  tag && resetSlide();
  if (!poses) return <div />;
  return (
    <ReactSwipe
      ref={reactSwipe}
      swipeOptions={{
        continuous: true,
        transitionEnd: (index, elem) => setSlide(index),
      }}
      key={poses.length + tag}
    >
      <PosesDisplay />
    </ReactSwipe>
  );
};

const mapStateToProps = state => {
  const { pose: { poses }, view: { tag } } = state;
  return { poses, tag };
};

const mapDispatchToProps = dispatch => {
  const { SET_SLIDE_INDEX } = actionTypes;
  return {
    setSlide: currentSlide =>
      dispatch({
        type: SET_SLIDE_INDEX,
        currentSlide,
      }),
  };
};

export default connect(mapStateToProps, mapDispatchToProps)(SwipeArea);