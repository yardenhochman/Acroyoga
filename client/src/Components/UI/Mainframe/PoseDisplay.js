import React, { Component, Fragment } from 'react';
import { connect } from 'react-redux';
import * as actionTypes from '../../../store/actions';
import ReactSwipe from 'react-swipe';
const style = {
  maxWidth: '50vw',
  maxHeight: '50vw',
};
const difficulties = ['Easy', 'Intermediate', 'Hard', 'Really Hard', 'Expert'];

const PoseDisplay = ({ setMode, poses, setFilter, filter, filterValue, mode }) => (
  <div className="poses-container">
    <div className="left-button">
      <button className="glyphicon glyphicon-menu-left" type="button" onClick={() => this.reactSwipe.prev()} />
    </div>

    <div className="carousel-container">
      <ReactSwipe ref={reactSwipe => (this.reactSwipe = reactSwipe)} className="carousel" swipeOptions={{ continuous: true }} key={(poses.length + 15124211).toString()}>
        {poses.map((pose, i) => (
          <div key={pose.img}>
            <h1 className="hello">{pose.name}</h1>
            <img style={style} src={pose.img} alt={'to be added'} />
            {mode === 'random' && <h2>Difficulty: {pose.difficulty}</h2>}
            <h2>Participants:{pose.number_of_people}</h2>
            <h2>Type:{pose.type}</h2>
          </div>
        ))}
      </ReactSwipe>
    </div>

    <div className="right-button">
      <button className="glyphicon glyphicon-menu-right" type="button" onClick={() => this.reactSwipe.next()} />
    </div>
  </div>
);
const mapStateToProps = state => {
  const { pose: { poses }, view: { mode, filter, filterValue } } = state;
  return {poses,mode,filter,filterValue};
};

const mapDispatchToProps = dispatch => {
  return {
    setMode: mode =>
      dispatch({
        type: actionTypes.SETMODE,
        mode,
      }),
    setFilter: (setFilter, value) =>
      dispatch({
        type: actionTypes.FILTER,
        setFilter,
        value,
      }),
  };
};

export default connect(mapStateToProps, mapDispatchToProps)(PoseDisplay);
