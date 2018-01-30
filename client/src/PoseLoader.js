import React, { Component, Fragment } from 'react';
import axios from 'axios';
import { connect } from 'react-redux';

import * as actionTypes from './store/actions';
import PoseDisplay from './Components/UI/Mainframe/PoseDisplay';
import Header from './Components/UI/Header/header';
import { CardHeader } from 'material-ui';
import FeedSummary from 'semantic-ui-react/dist/commonjs/views/Feed/FeedSummary';

//import './PoseLoader.css';

//Progressive app helpers

if ('serviceWorker' in navigator) {
  navigator.serviceWorker.register('./service-worker.js').then(() => console.log('Service Worker Registered'));
}

const storeFavoritesLocally = poses => {
  const posesToLocal = JSON.stringify(poses);
  localStorage.favorites = posesToLocal;
};
const retreiveLocalFavoritePoses = () => {
  let locallyStoredPoses = localStorage.favorites;
  if (locallyStoredPoses) {
    locallyStoredPoses = JSON.parse(locallyStoredPoses);
    console.log('local favorite poses retreived');
  }
  return locallyStoredPoses;
};

const storeLocally = poses => {
  const posesToLocal = JSON.stringify(poses);
  localStorage.poses = posesToLocal;
};
const retreiveLocalPoses = () => {
  let locallyStoredPoses = localStorage.poses;
  if (locallyStoredPoses) {
    locallyStoredPoses = JSON.parse(locallyStoredPoses);
    console.log('local poses retreived');
  }
  return locallyStoredPoses;
};

const locallyStoredAllPoses = retreiveLocalPoses();

const headers = { authorization: `${localStorage.getItem('token')}` };

class PoseLoader extends Component {
  componentDidMount = async () => {
    const { UserLogin } = this.props;
    try {
      const baseURL = '/users/token';
      const res = await axios({ method: 'get', baseURL, headers });
      const { data: { user } } = res;
      UserLogin(user);
    } catch (err) {
      console.log(err);
    }
  };
  markPose = async (pose_id, list_name) => {
    const { user_id, addToUser } = this.props;
    addToUser(pose_id, list_name);
    try {
      const data = { pose_id, user_id, list_name };
      const baseURL = '/users/addPose';
      const pose = await axios({ method: 'post', baseURL, headers, data }); //requestPosesFromServer(myRequest);
    } catch (err) {
      console.log(err);
    }
  };
  unMarkPose = async (pose_id, list_name) => {
    const { user_id, removeFromUser } = this.props;
    removeFromUser(pose_id, list_name); //2, Favorites
    try {
      console.log('here');
      const data = { pose_id, user_id, list_name };
      const baseURL = '/users/removePose';
      const pose = await axios({ method: 'delete', baseURL, headers, data }); //requestPosesFromServer(myRequest);
    } catch (err) {
      console.log(err);
    }
  };
  logOut = () => {
    localStorage.removeItem('token');
    this.props.UserLogout();
  };
  renderDisplay = () => {
    const { posesLoaded, lists: { Favorites },tag,poses } = this.props;
    if (!posesLoaded) {
      this.prepareToFetchPoses();
      return '';
    }
    return (
      <div className="display-space">
        <PoseDisplay key={posesLoaded+tag+poses}  userPoselists={Favorites} markPose={this.markPose} unMarkPose={this.unMarkPose} />
      </div>
    );
  };
  requestPosesFromServer = async (url, makeFetch) => {
    const { storePosesFromServer, setLoaded, mode } = this.props;

    const serverRequest = async () => {
      try {
        const pose = await axios.get(url, headers);
        return pose.data.data;
      } catch (err) {
        console.log(err);
      }
    };
    const serverCase = async () => {
      try {
        const poses = await serverRequest();
        storePosesFromServer(poses);
        mode === 'all' && storeLocally(poses);
        console.log('poses retreived from the server');
      } catch (err) {
        console.log(err);
      }
    };
    const localMemoryCase = () => {
      storePosesFromServer(locallyStoredAllPoses);
    };
    try {
      makeFetch ? serverCase() : localMemoryCase();
      setLoaded();
    } catch (err) {
      console.log(err);
    }
  };
  renderHeader = () => {
    const { mode, setMode, filterValue, filter, setFilter, userName, lists, setTag, tag } = this.props;
    return (
      <Header
        mode={mode}
        setMode={setMode}
        filterValue={filterValue}
        filter={filter}
        setFilter={setFilter}
        userName={userName}
        logOut={this.logOut}
        lists={Object.keys(lists)}
        setTag={setTag}
        tag={tag}
        key={tag}
      />
    );
  };
  prepareToFetchPoses = () => {
    console.log('preparing requestPosesFromServer setting');
    const { filterValue, filter, mode } = this.props;
    let url;
    let makeFetch = true;
    switch (mode) {
      case 'all':
        url = `/index/all`;
        if (locallyStoredAllPoses) makeFetch = false;
        break;
      case 'filtered':
        url = `/index/filter/${filter}/${filterValue}`;
        break;
      default:
    }
    return this.requestPosesFromServer(url, makeFetch);
  };
  render = () => {
    const header = this.renderHeader();
    const display = this.renderDisplay();
    console.log('PoseLoader updated');
    return (
      <div className="App">
        {header}
        {display}
      </div>
    );
  };
}
//Redux state
const mapStateToProps = state => {
  const { view: { posesLoaded, mode, filterValue, filter, tag }, user: { name: userName, lists, id: user_id } } = state;
  return { posesLoaded, mode, userName, lists, filter, filterValue, user_id, tag };
};
//Redux functions
const mapDispatchToProps = dispatch => {
  const {
    FILL_USER,
    LOG_OUT,
    SETMODE,
    POSES_LOADED,
    RELOAD,
    FILTER,
    SET_TAG,
    STORE_POSE,
    COLLECT_POSE,
    DUMP_POSE,
  } = actionTypes;
  return {
    UserLogin: user =>
      dispatch({
        type: FILL_USER,
        user,
      }),
    UserLogout: () =>
      dispatch({
        type: LOG_OUT,
      }),
    storePosesFromServer: pose =>
      dispatch({
        type: STORE_POSE,
        pose,
      }),
    addToUser: (pose_id, listName) =>
      dispatch({
        type: COLLECT_POSE,
        pose_id,
        listName,
      }),
    removeFromUser: (pose_id, listName) =>
      dispatch({
        type: DUMP_POSE,
        pose_id,
        listName,
      }),
    setMode: mode =>
      dispatch({
        type: SETMODE,
        mode,
      }),
    setTag: (tag,currentSlide) =>
      dispatch({
        type: SET_TAG,
        tag,
        currentSlide,
      }),
    setLoaded: () =>
      dispatch({
        type: POSES_LOADED,
      }),
    setFilter: (filters, value) =>
      dispatch({
        type: FILTER,
        filters,
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
