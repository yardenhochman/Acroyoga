import React, { Fragment } from 'react';
import { connect } from 'react-redux';
import * as actionTypes from '../../../store/actions';
import ReactSwipe from 'react-swipe';
import PoseCard from './PoseCard/poseCard';
import Media from 'react-media';

const PoseDisplay = ({ setMode, poses, setFilter, filter, filterValue, mode }) => {
  console.log('poseDisplay updated');
  const next = () => this.reactSwipe.next();
  const prev = () => this.reactSwipe.prev();
  return (
    <div className="poses-container">
      <div className="carousel-container">
        <ReactSwipe
          className="PoseDisplay"
          ref={reactSwipe => (this.reactSwipe = reactSwipe)}
          swipeOptions={{ continuous: true }}
          key={(poses.length + 15124211).toString()}
        >
          {poses.map(pose => PoseCard(pose, mode))}
        </ReactSwipe>
        <Media query={{ minWidth: 1000 }}>
          {matches =>
            matches && (
              <Fragment>
                <a className="btn btn-light" onClick={prev}>
                  <i className="fa fa-arrow-circle-o-left fa-4x " />
                </a>
                <a className="btn btn-light" onClick={next}>
                  <i className="fa fa-arrow-circle-o-right fa-4x " />
                </a>
              </Fragment>
            )
          }
        </Media>
      </div>
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
