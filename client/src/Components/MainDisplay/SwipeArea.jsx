import React from 'react';
import { connect } from 'react-redux';
import ReactSwipe from 'react-swipe';
import {SET_SLIDE_INDEX} from '../../store/actions';
import PosesDisplay from './PosesDisplay';

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

const mapStateToProps = ({ pose: { poses }, view: { tag, difficulty } }) => ({ poses, tag, difficulty });

const mapDispatchToProps = dispatch => ({
    setSlide: currentSlide =>
      dispatch({
        type: SET_SLIDE_INDEX,
        currentSlide,
      }),
});

export default connect(mapStateToProps, mapDispatchToProps)(SwipeArea);
