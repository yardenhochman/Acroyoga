import React, { Component, Fragment } from 'react';
import axios from 'axios';
import { connect } from 'react-redux';

import * as actionTypes from './store/actions';
import PoseDisplay from './Components/UI/Mainframe/PoseDisplay';
import Header from './Components/UI/Header/header';
import { CardHeader } from 'material-ui';
import FeedSummary from 'semantic-ui-react/dist/commonjs/views/Feed/FeedSummary';

class PoseLoader extends Component {
  state = { localPoses: null, headers: null };
  componentWillMount = () => {
    const retreiveLocalPoses = () => {
      let locallyStoredPoses = localStorage.poses;
      if (locallyStoredPoses) {
        locallyStoredPoses = JSON.parse(locallyStoredPoses);
        console.log('local poses retreived');
      }
      return locallyStoredPoses;
    };
    const localPoses = retreiveLocalPoses();
    localPoses && this.setState({ localPoses });
    const headers = { authorization: `${localStorage.getItem('token')}` };
    this.setState({ headers });
  };
  componentDidMount = async () => {
    const { UserLogin } = this.props;
    const { headers } = this.state;
    console.log('here');
    const checkTokenWithServer = async () => {
      const baseURL = '/users/token';
      const res = await axios({ method: 'get', baseURL, headers });
      return res;
    };
    try {
      const userFromServer = await checkTokenWithServer();
      const { data: { user } } = userFromServer;
      UserLogin(user);
    } catch (err) {
      console.log(err);
    }
  };
  markPose = async (pose_id, list_name) => {
    const { user_id, addPoseToUserFavorites } = this.props;
    const { headers } = this.state;
    addPoseToUserFavorites(pose_id, list_name);
    const addPoseToUserOnServer = async () => {
      const data = { pose_id, user_id, list_name };
      const baseURL = '/users/addPose';
      await axios({ method: 'post', baseURL, headers, data });
    };
    try {
      addPoseToUserOnServer();
    } catch (err) {
      console.log(err);
    }
  };
  unMarkPose = async (pose_id, list_name) => {
    const { user_id, removeFromUserFavorites } = this.props;
    const { headers } = this.state;
    removeFromUserFavorites(pose_id, list_name);
    const removePoseFromUserOnServer = async () => {
      const data = { pose_id, user_id, list_name };
      const baseURL = '/users/removePose';
      await axios({ method: 'delete', baseURL, headers, data });
    };
    try {
      removePoseFromUserOnServer();
    } catch (err) {
      console.log(err);
    }
  };
  renderDisplay = () => {
    const { posesLoaded, lists: { Favorites }, tag, poses } = this.props;
    const preparePoses = () => {
      this.prepareToFetchPoses();
      return '';
    };
    const posesReady = (
      <div className="display-space">
        <PoseDisplay
          key={posesLoaded + tag + poses}
          userPoselists={Favorites}
          markPose={this.markPose}
          unMarkPose={this.unMarkPose}
        />
      </div>
    );
    let display = !posesLoaded ? preparePoses() : posesReady;
    return display;
  };
  requestPosesFromServer = async (url, makeFetch) => {
    const { storePoses, setLoaded, mode } = this.props;
    const storeLocally = poses => {
      const posesToLocal = JSON.stringify(poses);
      localStorage.poses = posesToLocal;
    };

    const serverRequest = async () => {
      const { headers } = this.state;
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
        storePoses(poses);
        mode === 'all' && storeLocally(poses);
        console.log('poses retreived from the server');
      } catch (err) {
        console.log(err);
      }
    };
    const localMemoryCase = () => storePoses(this.state.localPoses);
    try {
      makeFetch ? serverCase() : localMemoryCase();
      setLoaded();
    } catch (err) {
      console.log(err);
    }
  };
  prepareToFetchPoses = () => {
    console.log('preparing requestPosesFromServer setting');
    const { filterValue, filter, mode } = this.props;
    let url;
    let makeFetch = true;
    switch (mode) {
      case 'all':
        url = `/index/all`;
        if (this.state.localPoses) makeFetch = false;
        break;
      case 'filtered':
        url = `/index/filter/${filter}/${filterValue}`;
        break;
      default:
    }
    return this.requestPosesFromServer(url, makeFetch);
  };
  render = () => {
    const header = <Header logOut={this.logOut} />;
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
  const { FILL_USER, POSES_LOADED, RELOAD, FILTER, SET_TAG, STORE_POSE, COLLECT_POSE, DUMP_POSE } = actionTypes;
  return {
    UserLogin: user =>
      dispatch({
        type: FILL_USER,
        user,
      }),

    storePoses: pose =>
      dispatch({
        type: STORE_POSE,
        pose,
      }),
    addPoseToUserFavorites: (pose_id, listName) =>
      dispatch({
        type: COLLECT_POSE,
        pose_id,
        listName,
      }),
    removeFromUserFavorites: (pose_id, listName) =>
      dispatch({
        type: DUMP_POSE,
        pose_id,
        listName,
      }),
    setLoaded: () =>
      dispatch({
        type: POSES_LOADED,
      }),
  };
};

export default connect(mapStateToProps, mapDispatchToProps)(PoseLoader);
