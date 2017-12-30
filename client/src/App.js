import React, { Component, Fragments } from 'react';
import './App.css';
import Mainframe from './Components/UI/Mainframe/mainframe';
/* import MainPage from './Containers/MainPage'; */
import { loader, removeSpacesInObjectKeys } from './helpers/helpers';
import { connect } from 'react-redux';
import * as actionTypes from './store/actions';

//import { EmailSignUpForm } from 'redux-auth/default-theme';

class App extends Component {
  state = {
    loaded: false,
  };
  loadStatus = pose => this.setState({ loaded: true });
  setMode = mode => this.setState({ mode });
  componentDidMount = () => {
    const myHeaders = new Headers();
    const myInit = {
      method: 'GET',
      headers: myHeaders,
      mode: 'cors',
      cache: 'default',
    };
    fetch(`/index/random`, myInit)
      .then(pose => pose.json())
      .then(pose => removeSpacesInObjectKeys(pose.data))
      .then(pose => this.props.storePoses(pose))
      .then(this.loadStatus());
  };
  login = () => this.props.setMode('user');

  render = () => {
    const {poses, mode, user } = this.props
    console.log(poses,this.state.loaded);
    return <div className="App loader-container">{this.state.loaded ? <Mainframe /> : loader}</div>;
  };
}

const mapStateToProps = state => {
  return {
    poses: state.view.poses,
    mode: state.view.mode,
    user: state.view.user
  };
};
const mapDispatchToProps = dispatch => {
  return {
    storePoses: posesArray =>
      dispatch({
        type: actionTypes.STORE_POSES,
        posesArray,
      }),
    setMode: value =>
      dispatch({
        type: actionTypes.SETMODE,
        value,
      }),
    loaded: () =>
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
