import React, { Component } from 'react';

import { connect } from 'react-redux';

import { storeUser, store_Poses } from './store/actions/actions';

import MainDisplay from './Components/MainDisplay/MainDisplay';
import api from './api';
import LoadDisplay from './Components/UI/Loader/loader';

class PoseLoader extends Component {
  componentDidMount = async () => {
    const { UserLogin, storePoses } = this.props;
    UserLogin(api.user.get(true));
    storePoses(api.poses.get(true));

    UserLogin(await api.user.get());
    storePoses(await api.poses.get());
  };

  render = () => {
    if (!this.props.poses || !this.props.poses.length) {
      return LoadDisplay;
    }
    return <div><MainDisplay /></div>;
  };
};

const mapStateToProps = state => {
    const { pose: {poses} } = state;
  return { poses };
};
const mapDispatchToProps = dispatch => {
  return {
    UserLogin: user => dispatch(storeUser(user)),
    storePoses: pose => dispatch(store_Poses(pose))
  };
};

export default connect(mapStateToProps, mapDispatchToProps)(PoseLoader);


