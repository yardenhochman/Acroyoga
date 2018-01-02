import React, { Component } from 'react';
import './PoseLoader.css';
import PoseDisplay from './Components/UI/Mainframe/PoseDisplay';
import { connect } from 'react-redux';
import * as actionTypes from './store/actions';
import FacebookLogin from 'react-facebook-login';

const myHeaders = new Headers();
const init = {
  method: 'GET',
  headers: myHeaders,
  mode: 'cors',
  cache: 'default',
};
const responseFacebook = response => {
  console.log(response);
};

class PoseLoader extends Component {
  displayMode = () => {
    const { loaded } = this.props;
    if (!loaded) {
      this.fetchPoses();
      return '';
    }
    return <PoseDisplay />;
  };
  fetch = myRequest => {
    const { storePose, setLoaded } = this.props;
    fetch(myRequest)
      .then(res => res.json())
      .then(pose => {
        storePose(pose.data);
        setLoaded();
      });
  };
  fetchPoses = () => {
    const { value, filter, mode } = this.props;
    let url;
    switch (mode) {
      case 'random':
        url = `/index/random`;
      case 'filtered':
        url = `/index/filter/${filter}/${value}`;
      default:
        const myRequest = new Request(url, init);
        return this.fetch(myRequest);
    }
  };
  render = () => {
    return <div className="App">{this.displayMode()}</div>;
  };
}

const mapStateToProps = state => {
  return {
    loaded: state.view.loaded,
    mode: state.view.mode,
    user: state.view.user,
    value: state.view.value,
    filter: state.view.filter,
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
