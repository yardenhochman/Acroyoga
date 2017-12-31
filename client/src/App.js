import React, { Component } from 'react';
import './App.css';
import Mainframe from './Components/UI/Mainframe/mainframe';
import { connect } from 'react-redux';
import * as actionTypes from './store/actions';

//import { EmailSignUpForm } from 'redux-auth/default-theme';

class App extends Component {
  //in charge of loading pics
  displayMode = () => {
    const { loaded, mode } = this.props;
    if (!loaded) return '';
    switch (mode) {
      case 'random':
        return <Mainframe />;
      default:
        return console.log('you reached default. mode was ', mode);
    }
  };
  fetchRandomPose = () => {
    fetch(`/index/random`)
      .then(res => res.json())
      .then(pose => {
        this.props.storePose(pose.data);
        this.props.setLoaded();
      });
  };
  componentDidMount = () => {
    switch (this.props.mode) {
      case 'random':
        return this.fetchRandomPose();
    }
  };
  render = () => {
    // eslint-disable-next-line
    return <div className="App loader-ceontainer">{this.displayMode()}</div>;
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

export default connect(mapStateToProps, mapDispatchToProps)(App);
//http://localhost:3001/index/random

/* 

options:
-load random pose
-load from category (DB)

 */
