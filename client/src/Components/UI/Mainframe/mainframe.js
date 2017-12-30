import React, { Fragment } from 'react';
import { connect } from 'react-redux';
import * as actionTypes from '../../../store/actions';

const Mainframe = ({ pose, login }) => {
  console.log(pose)
  const style = {
    maxWidth: '50vw',
    maxHeight: '50vw',
  };
  return (
    <Fragment>
      <h1 className="hello">{pose.title}</h1>
      <img style={style} src={pose.img} alt={'to be added'} />
      <h2>Difficulty:{pose.Difficulty}</h2>
      <h2>Participans:{pose.Number_of_persons}</h2>
      <h2>Tagged:{pose.Tagged}</h2>
      <h2>Type:{pose.Position_Type}</h2>
      <button onClick={login}>Login</button>
    </Fragment>
  );
};
const mapStateToProps = state => {
  return {
    pose: state.pose.pose
  };
};

const mapDispatchToProps = dispatch => {
  return {
    storePoses: posesArray =>
      dispatch({
        type: actionTypes.STORE_POSES,
        posesArray,
      }),
    login: () =>
      dispatch({
        type: actionTypes.SETMODE,
        set:'user'
      })
  };
};

export default connect(mapStateToProps, mapDispatchToProps)(Mainframe);
