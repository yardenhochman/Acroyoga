import React, { Component } from 'react';
import axios from 'axios';
import { connect } from 'react-redux';
import { Button, Menu } from 'semantic-ui-react';

import * as actionTypes from './store/actions';
import PoseDisplay from './Components/UI/Mainframe/PoseDisplay';
import Auth from './Containers/Auth';
import Lists from './Containers/Lists';

import './PoseLoader.css';

const isActive = (difficulty, filter, filterValue, mode) => {
  if (mode === 'all' && difficulty === 'All') return true;
  if (mode === 'filtered' && filterValue === difficulty) return true;
  return false;
};

const isFilter = difficulty => {
  console.log(difficulty);
  if (difficulty === 'All') return false;
  return true;
};

const difficultyButtons = (filter, filterValue, mode, setFilter, setMode) => {
  const difficulties = ['All', 'Easy', 'Intermediate', 'Hard', 'Really Hard', 'Expert'];
  const colors = ['black', 'green', 'yellow', 'orange', 'red', 'purple'];
  return difficulties.map((difficulty, i) => <Menu.Item key={i} className={'btn' + (isActive(difficulty, filter, filterValue, mode) ? ' active' : ' inactive')} name={difficulty} onClick={isFilter(difficulty) ? () => setFilter('difficulty', difficulty) : () => setMode('all')} color={colors[i]} />);
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
  Header = () => {
    const { mode, setMode, filterValue, filter, setFilter } = this.props;

    return (
      <Menu inverted className="header" widths={'six'} fixed={'top'} size={'massive'} fluid>
        {difficultyButtons(filter, filterValue, mode, setFilter, setMode) /*wrap in div to make vertical*/}
      </Menu>
    );
  };
  render = () => {
    const { userName } = this.props;
    return (
      <div className="App">
        {this.Header()}
        <div className="display-space">{this.displayMode()}</div>
        {/*userName === 'guest' ? <Auth /> : <Lists />*/}
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
