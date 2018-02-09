import React, { Component } from 'react';

import { connect } from 'react-redux';

import { storeUser, store_Poses } from './store/actions/actions';

import MainDisplay from './Components/MainDisplay/MainDisplay';
import api from './api';
import loader from './Components/UI/Loader/loader';

class PoseLoader extends Component {
  componentDidMount = async () => {
    this.props.UserLogin(api.user.get(true));
    this.props.storePoses(api.poses.get(true));

    this.props.UserLogin(await api.user.get());

    this.props.storePoses(await api.poses.get());
  };

  render = () => {
    return (
      <div>
        {this.props.poses && this.props.poses.length ?
          <MainDisplay />:<loader />
        }
      </div>
    );
  };
};

const mapStateToProps = state => {
    const { pose: {poses} } = state;
  return { poses };
};
const mapDispatchToProps = dispatch => {
  return { UserLogin: user => dispatch(storeUser(user)), storePoses: pose => dispatch(store_Poses(pose)) };
};

export default connect(mapStateToProps, mapDispatchToProps)(PoseLoader);
