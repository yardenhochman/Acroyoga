import React from 'react';
import { connect } from 'react-redux';
import ReactSwipe from 'react-swipe';
import * as actionTypes from '../../../store/actions';
import PosesDisplay from './PosesDisplay/PosesDisplay';

const SwipeArea = ({ poses, tag, setSlide, reactSwipe, resetSlide, difficulty, lists }) => {
  if (!poses) return <div />;
  const listKey = lists && lists.Favorites;
  console.log('SwipeArea updates')
  return (
    <ReactSwipe
      ref={reactSwipe}
      swipeOptions={{
        continuous: true,
        transitionEnd: (index, elem) => setSlide(index),
      }}
      key={poses.length + tag + difficulty + listKey}
    >
      <PosesDisplay resetSlide={resetSlide} />
    </ReactSwipe>
  );
};

const mapStateToProps = state => {
  const { pose: { poses }, view: { tag, difficulty } } = state;
  return { poses, tag, difficulty };
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
