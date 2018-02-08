import React, { Component } from 'react';

import { connect } from 'react-redux';

import * as actionTypes from './store/actions/actions';
import MainDisplay from './Components/MainDisplay/MainDisplay';
import Header from './Components/Header/Header';
import api from './api';
class PoseLoader extends Component {
  componentDidMount = async () => {
    this.props.UserLogin(api.user.get(true));
    this.props.storePoses(api.poses.get(true));

    this.props.UserLogin(await api.user.get());

    this.props.storePoses(await api.poses.get());
  };

  render = () => {
    return (
      <div className="App">
        {this.props.poses.length &&
        <React.Fragment> 
          <Header />
          <div className="display-space">
            <MainDisplay />
          </div>
        </React.Fragment>
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
