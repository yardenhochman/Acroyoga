import React, { Component } from 'react';
import axios from 'axios';
import { connect } from 'react-redux';

import * as actionTypes from './store/actions';
import PoseDisplay from './Components/UI/Mainframe/PoseDisplay';
import Auth from './Containers/Auth';
import Lists from './Containers/Lists';

import './PoseLoader.css';


const myHeaders = new Headers();
const init = {
  method: 'GET',
  headers: myHeaders,
  mode: 'cors',
  cache: 'default',
};
const responseFacebook = response => console.log(response);

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
      const pose = await axios.get(url)//fetch(myRequest);
      await storePose(pose.data.data);
      setLoaded();
    } catch (err) {
      console.log(err);
    }
  };

  fetchPoses = () => {
    const { filterValue, filter, mode } = this.props;
    let url;
    switch (mode) {
      case 'random':
        url = `/index/random`;
      case 'filtered':
        url = `/index/filter/${filter}/${filterValue}`;
      default:
        return this.fetch(url);
    }
  };
  renderButtons = () => {
    const { mode, setMode, filterValue, filter, setFilter } = this.props;
    const difficulties = ['Easy', 'Intermediate', 'Hard', 'Really Hard', 'Expert'];
    return (
      <div className="filters">
        <button className={`btn ${mode === 'random' ? 'active' : ''}`} onClick={() => setMode('random')}>
          Random
        </button>
        <div className="difficulty-buttons">
          {difficulties.map((difficulty, i) => (
            <button key={i} className={'btn' + (mode === 'filtered' && filter === 'difficulty' && filterValue === difficulty ? ' active' : ' inactive')} onClick={() => setFilter('difficulty', difficulty)}>
              {difficulty}
            </button>
          ))}
        </div>
      </div>
    );
  };
  render = () => {
    const { userName } = this.props;
    return (
      <div className="App">
        {this.renderButtons()}
        <div className="display-space">{this.displayMode()}</div>
        {userName === 'guest' ? <Auth /> : '<Lists />'};
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
//http://localhost:3001/index/random

/* 

options:
-load random pose
-load from category (DB)

 */
