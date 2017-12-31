import React, { Component, Fragments } from 'react';
import './App.css';
import Mainframe from './Components/UI/Mainframe/mainframe';
/* import MainPage from './Containers/MainPage'; */
import { removeSpacesInObjectKeys } from './helpers/helpers';
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
    /* const myInit = {
      method: 'GET',
      headers: myHeaders,
      mode: 'cors',
      cache: 'default',
    }; */
    fetch(`/index/random`)
      .then( res => res.json())  
      .then(pose => removeSpacesInObjectKeys(pose.data))
      .then(pose => this.props.storePose(pose))
      .then(this.loadStatus());
  };
  login = () => this.props.setMode('user');

  render = () => {
    const { poses, mode, user } = this.props;
    const { loaded } = this.state;
    console.log(poses, this.state.loaded); // eslint-disable-next-line
    return <div className="App loader-container">{loaded && mode === 'random' && <Mainframe />}</div>;
  };
}

const mapStateToProps = state => {
  return {
    poses: state.pose.poses,
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
