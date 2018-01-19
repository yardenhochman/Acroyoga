import React from 'react';
import { connect } from 'react-redux';
import * as actionTypes from '../../../store/actions';
import ReactSwipe from 'react-swipe';
import PoseCard from './PoseCard/poseCard';

const PoseDisplay = ({ setMode, poses, setFilter, filter, filterValue, mode }) => {
  console.log('poseDisplay updated');
  const next = () => this.reactSwipe.next();
  const prev = () => this.reactSwipe.prev();
  return (
    <div className="poses-container">
      {
        <div className="carousel-container">
          <ReactSwipe
            ref={reactSwipe => (this.reactSwipe = reactSwipe)}
            className="carousel"
            swipeOptions={{ continuous: true }}
            key={(poses.length + 15124211).toString()}
          >
            {poses.map(pose => PoseCard(pose, prev, next))}
          </ReactSwipe>
        </div>
      }
    </div>
  );
};
const mapStateToProps = state => {
  const { pose: { poses }, view: { mode, filter, filterValue } } = state;
  return { poses, mode, filter, filterValue };
};

const mapDispatchToProps = dispatch => {
  const { SETMODE, FILTER } = actionTypes;
  return {
    setMode: mode => dispatch({ type: SETMODE, mode }),
    setFilter: (setFilter, value) => dispatch({ type: FILTER, setFilter, value }),
  };
};

export default connect(mapStateToProps, mapDispatchToProps)(PoseDisplay);

/*

*/
