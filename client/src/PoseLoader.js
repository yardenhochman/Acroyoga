import React, { Component } from 'react';

import { connect } from 'react-redux';

import * as actionTypes from './store/actions';
import MainDisplay from './Components/MainDisplay/MainDisplay';
import Header from './Components/Header/Header';
import api from './api';
class PoseLoader extends Component {
  componentWillMount = async () => {
    const {UserLogin,storePoses,poses} = this.props;
    UserLogin(await api.user.get(true));
    storePoses(await api.poses.get(true));

    UserLogin(await api.user.get());
    const serverPoses = await api.poses.get();
    if (serverPoses.length !== poses.length) {
      storePoses(serverPoses)
    }
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
