import React, { Component } from 'react';
import './PoseLoader.css';
import RandomPose from './Components/UI/Mainframe/RandomPose';
import { connect } from 'react-redux';
import * as actionTypes from './store/actions';

//import { EmailSignUpForm } from 'redux-auth/default-theme';

class PoseLoader extends Component {
  displayMode = () => {
    const { loaded, mode } = this.props;
    if (!loaded) return '';
    switch (mode) {
      case 'random':
        return <RandomPose />;
      default:
        return console.log('(displayMode) you reached default. mode was ', mode);
    }
  };
  fetchRandomPose = () => {
    const { storePose, setLoaded } = this.props;
    fetch(`/index/random`)
      .then(res => res.json())
      .then(pose => {
        storePose(pose.data);
        setLoaded();
      });
  };
  componentDidMount = () => {
    const { mode } = this.props;
    switch (mode) {
      case 'random':
        return this.fetchRandomPose();
      default:
        return console.log('(CDidMount) you reached default. mode was ', mode);
    }
  };
  render = () => {
    // eslint-disable-next-line
    return <div className="App">{this.displayMode()}</div>;
  };
}

const mapStateToProps = state => {
  return {
    loaded: state.view.loaded,
    mode: state.view.mode,
    user: state.view.user,
  };
};
const mapDispatchToProps = dispatch => {
  return {
    storePose: pose =>
      dispatch({
        type: actionTypes.STORE_POSE,
        pose,
      }),
    setMode: value =>
      dispatch({
        type: actionTypes.SETMODE,
        value,
      }),
    setLoaded: () =>
      dispatch({
        type: actionTypes.LOADED,
      }),
  };
};

export default connect(mapStateToProps, mapDispatchToProps)(PoseLoader);
//http://localhost:3001/index/random

/* 

options:
-load random pose
-load from category (DB)

 */
