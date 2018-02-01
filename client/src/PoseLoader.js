import React, { Component, Fragment } from 'react';

import { connect } from 'react-redux';

import * as actionTypes from './store/actions';
import PoseDisplay from './Components/UI/Mainframe/PoseDisplay';
import Header from './Components/UI/Header/header';
import { CardHeader } from 'material-ui';
import FeedSummary from 'semantic-ui-react/dist/commonjs/views/Feed/FeedSummary';

import axios from 'axios';

import api from './api';

class PoseLoader extends Component {
  componentWillMount = async () => {
    this.props.UserLogin(await api.user.get());
    this.props.storePoses(await api.poses.get());
  };

  markPose = async (pose_id, list_name) => {
    const { user_id, addPoseToUserFavorites } = this.props;
    const { headers } = this.state;
    addPoseToUserFavorites(pose_id, list_name);
    const addPoseToUserOnServer = async () => {
      const data = { pose_id, user_id, list_name };
      const baseURL = '/user/addPose';
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
      const baseURL = '/user/removePose';
      await axios({ method: 'delete', baseURL, headers, data });
    };
    try {
      removePoseFromUserOnServer();
    } catch (err) {
      console.log(err);
    }
  };

  render = () => {
    return (
      <div className="App">
        <Header logOut={this.logOut} />
        <div className="display-space">
          <PoseDisplay
            userPoselists={this.props.lists.Favorites}
            markPose={this.markPose}
            unMarkPose={this.unMarkPose}
          />
        </div>
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
