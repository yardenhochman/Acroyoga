import React, { Fragment } from 'react';
import { connect } from 'react-redux';
import * as actionTypes from '../../../store/actions';

const PoseDisplay = ({ setMode, poses, filter }) => {
  const pose = poses[0];
  const style = {
    maxWidth: '50vw',
    maxHeight: '50vw',
  };
  return (
    <Fragment>
      <h1 className="hello">{pose.name}</h1>
      <img style={style} src={pose.img} alt={'to be added'} />
      <h2>Difficulty:{pose.difficulty}</h2>
      <h2>Participans:{pose.number_of_people}</h2>
      <h2>Type:{pose.type}</h2>
      <button onClick={() => setMode('random')}>Random</button>
      <button onClick={() => filter('difficulty', 'Intermediate')}>Difficulty:Intermediate</button>
      <button onClick={() => filter('difficulty', 'Hard')}>Difficulty:Hard</button>
      <button onClick={() => filter('difficulty', 'Really Hard')}>Difficulty:Really Hard</button>
      <button onClick={() => filter('difficulty', 'Expert')}>Difficulty:Expert</button>
    </Fragment>
  );
};

const mapStateToProps = state => {
  return {
    poses: state.pose.poses,
  };
};

const mapDispatchToProps = dispatch => {
  return {
    setMode: mode =>
      dispatch({
        type: actionTypes.SETMODE,
        mode,
      }),
    filter: (filter, value) =>
      dispatch({
        type: actionTypes.FILTER,
        filter,
        value,
      }),
  };
};

export default connect(mapStateToProps, mapDispatchToProps)(PoseDisplay);
