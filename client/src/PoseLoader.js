import React, { Component } from 'react';
import axios from 'axios';
import { connect } from 'react-redux';

import * as actionTypes from './store/actions';
import PoseDisplay from './Components/UI/Mainframe/PoseDisplay';
//import Auth from './Containers/Auth';
//import Lists from './Containers/Lists';
import Header from './Components/UI/Header/header';

import './PoseLoader.css';

const headers = { Authorization: `${localStorage.getItem('token')}` };
class PoseLoader extends Component {
  componentDidMount = async () => {
    const { UserLogin } = this.props;
    try {
      const baseURL = 'users/token';
      const res = await axios({ method: 'get', baseURL, headers }); //fetch(myRequest);
      UserLogin(res.data.user);
    } catch (err) {
      console.log(err);
    }
  };
  markPose = async () => {
    /*
    receives a pose id and list type (favorite)
    adds to local user favorite list (optimistic update)
    posts to backend: userid, poseid, list_name
    */
    const { storeUserPose = '' } = this.props;
    try {
      const data = {pose_id:'1',user_id:'1',list_name:'1'}
      const baseURL = 'users/';
      const pose = await axios({ method: 'post', baseURL, headers, data }); //fetch(myRequest);
    } catch (err) {
      console.log(err);
    }
  };
  logOut = () => {
    localStorage.removeItem('token');
    this.props.UserLogout();
  };
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
      const pose = await axios.get(url, headers); //fetch(myRequest);
      storePose(pose.data.data);
      setLoaded();
    } catch (err) {
      console.log(err);
    }
  };

  fetchPoses = () => {
    console.log('fetch');
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
    const { mode, setMode, filterValue, filter, setFilter, userName } = this.props;
    console.log('Loader updated');
    return (
      <div className="App">
        <Header
          mode={mode}
          setMode={setMode}
          filterValue={filterValue}
          filter={filter}
          setFilter={setFilter}
          userName={userName}
          logOut={this.logOut}
        />
        <div className="display-space">{this.displayMode()}</div>
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
    UserLogin: user =>
      dispatch({
        type: actionTypes.FILL_USER,
        user,
      }),
    UserLogout: () =>
      dispatch({
        type: actionTypes.LOG_OUT,
      }),
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
