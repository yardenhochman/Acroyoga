import React, { Component } from 'react';
import './App.css';
import Mainframe from './Components/UI/Mainframe/mainframe';
import { connect } from 'react-redux';
import * as actionTypes from './store/actions';

//import { EmailSignUpForm } from 'redux-auth/default-theme';

class App extends Component {
  state = {
    loaded: false,
    mode: 'random'
  };
  setMode = mode => this.setState({ mode });
  componentDidMount = () => {
    fetch(`/index/random`)
      .then(res => res.json())
      .then(pose => {
        this.props.storePose(pose.data);
        this.setState({ loaded: true });
      });
  };
  login = () => this.props.setMode('user');

  render = () => {
    const { poses, mode, user } = this.props;
    const { loaded } = this.state; // eslint-disable-next-line
    return <div className="App loader-ceontainer">{loaded && mode === 'random' && <Mainframe />}</div>;
  };
}

const mapStateToProps = state => {
  return {
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
