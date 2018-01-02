import React, { Component } from 'react';
import './PoseLoader.css';
import PoseDisplay from './Components/UI/Mainframe/PoseDisplay';
import { connect } from 'react-redux';
import * as actionTypes from './store/actions';

const myHeaders = new Headers();
const init = {
  method: 'GET',
  headers: myHeaders,
  mode: 'cors',
  cache: 'default',
};

class PoseLoader extends Component {
  displayMode = () => {
    const { loaded, mode } = this.props;
    if (!loaded) return '';
    switch (mode) {
      case 'filtered':
      case 'random':
        return <PoseDisplay />;
      default:
        return console.log('(displayMode) you reached default. mode was ', mode);
    }
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
    const { value, filters, mode } = this.props;
    let url;
    switch (mode) {
      case 'random':
        url = `/index/random`;
      case 'filtered':
        url = `/index/filter/${filters}/${value}`;
      default:
        const myRequest = new Request(url, init);
        return this.fetch(myRequest);
    }
  };
  render = () => {
    this.fetchPoses();
    // eslint-disable-next-line
    return <div className="App">{this.displayMode()}</div>;
  };
}

const mapStateToProps = state => {
  return {
    loaded: state.view.loaded,
    mode: state.view.mode,
    user: state.view.user,
    value: state.view.value,
    filters: state.view.filters,
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
