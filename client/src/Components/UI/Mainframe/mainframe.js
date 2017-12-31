import React, { Fragment } from 'react';
import { connect } from 'react-redux';
import * as actionTypes from '../../../store/actions';

const Mainframe = ({ login, poses }) => {
  console.log(poses[0].id);
  const pose = poses[0]
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
      <button onClick={login}>Login</button>
    </Fragment>
  );
};

const mapStateToProps = state => {
  return {
    poses: state.pose.poses,
    mode: state.view.mode,
    user: state.view.user,
  };
};

const mapDispatchToProps = dispatch => {
  return {
    login: () =>
      dispatch({
        type: actionTypes.SETMODE,
        set: 'user',
      }),
  };
};

export default connect(mapStateToProps,mapDispatchToProps)(Mainframe);
