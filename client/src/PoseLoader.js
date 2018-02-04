import React, { Component } from 'react';

import { connect } from 'react-redux';

import * as actionTypes from './store/actions';
import MainDisplay from './Components/MainDisplay/MainDisplay';
import Header from './Components/Header/Header';
import api from './api';
class PoseLoader extends Component {
  componentWillMount = async () => {
    this.props.UserLogin(await api.user.get(true));
    this.props.storePoses(await api.poses.get(true));

    this.props.UserLogin(await api.user.get());
    //const serverPoses = api.poses.get();
    //if (serverPoses.length !== this.props.poses.length) this.props.storePoses(serverPoses)
    this.props.storePoses(await api.poses.get());
  };

  render = () => {
    //console.log('poseLoader updates');
    return (
      <div className="App">
        <Header logOut={this.logOut} />
        <div className="display-space">
          <MainDisplay />
        </div>
      </div>
    );
  };
};

const mapStateToProps = state => {
    const { pose: {poses} } = state;
  return { poses };
};
const mapDispatchToProps = dispatch => {
  const { FILL_USER, STORE_POSE } = actionTypes;
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
  };
};

export default connect(mapStateToProps, mapDispatchToProps)(PoseLoader);
