import React, { Component } from 'react';
import axios from 'axios';
import { connect } from 'react-redux';

import * as actionTypes from './store/actions';
import PoseDisplay from './Components/UI/Mainframe/PoseDisplay';
//import Auth from './Containers/Auth';
//import Lists from './Containers/Lists';
import Header from './Components/UI/Header/header';

import './PoseLoader.css';

class PoseLoader extends Component {
  displayMode = () => {
    const { loaded } = this.props;
    if (!loaded) {
      this.fetchPoses();
      return '';
    }
    return <PoseDisplay />;
  };
  fetch = async url => {
    const { storePose, setLoaded } = this.props;
    try {
      const pose = await axios.get(url); //fetch(myRequest);
      await storePose(pose.data.data);
      setLoaded();
    } catch (err) {
      console.log(err);
    }
  };

  fetchPoses = () => {
    console.log('fetch')
    const { filterValue, filter, mode } = this.props;
    let url;
    switch (mode) {
      case 'all':
        url = `/index/all`;
        break;
      case 'filtered':
        url = `/index/filter/${filter}/${filterValue}`;
        break;
      default:
    }
    return this.fetch(url);
  };

  render = () => {
    console.log('Loader updated');
    return (
      <div className="App">
        <Header {...this.props} />
        {<div className="display-space">{this.displayMode()}</div>}
      </div>
    );
  };
}

const mapStateToProps = state => {
  const { view: { loaded, mode, filterValue, filter }, user: { name: userName, lists } } = state;
  return { loaded, mode, userName, lists, filter, filterValue };
};
const mapDispatchToProps = dispatch => {
  return {
    storePose: pose =>
      dispatch({
        type: actionTypes.STORE_POSE,
        pose,
      }),
    setMode: mode =>
      dispatch({
        type: actionTypes.SETMODE,
        mode,
      }),
    setLoaded: () =>
      dispatch({
        type: actionTypes.LOADED,
      }),
    setFilter: (setFilter, value) =>
      dispatch({
        type: actionTypes.FILTER,
        setFilter,
        value,
      }),
  };
};

export default connect(mapStateToProps, mapDispatchToProps)(PoseLoader);
//http://localhost:3001/index/all

/* 

options:
-load all pose
-load from category (DB)

 */
