import React, { Component, Fragment } from 'react';
import axios from 'axios';
import { connect } from 'react-redux';

import * as actionTypes from './store/actions';
import PoseDisplay from './Components/UI/Mainframe/PoseDisplay';
import CircularProgress from 'material-ui/CircularProgress';

//import Auth from './Containers/Auth';
//import Lists from './Containers/Lists';
import Header from './Components/UI/Header/header';

import './PoseLoader.css';

const headers = { authorization: `${localStorage.getItem('token')}` };

class PoseLoader extends Component {
  state = { userCheck: false };
  componentDidMount = async () => {
    const { UserLogin } = this.props;
    try {
      const baseURL = '/users/token';
      const res = await axios({ method: 'get', baseURL, headers }); //fetch(myRequest);
      if (!res.data.user) this.setState({ userCheck: true });
      console.log(res.data.user);
      await UserLogin(res.data.user);
      this.setState({ userCheck: true });
    } catch (err) {
      console.log(err);
    }
  };
  markPose = async selectedPoseID => {
    /*
    receives a pose poseID and list type (favorite)
    adds to local user favorite list (optimistic update)
    posts to backend: userid, poseid, list_name
    */
    console.log(selectedPoseID);
    this.props.addToUser(selectedPoseID);
    try {
      const data = { pose_id: selectedPoseID, user_id: this.props.userID, list_name: 'Favorites' };
      const baseURL = '/users/addPose';
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
    return (
      <div className="display-space">
        <PoseDisplay userPoselists={this.props.lists.Favorites} markPose={this.markPose} />;
      </div>
    );
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
  renderHeader = () => {
    const { mode, setMode, filterValue, filter, setFilter, userName, lists } = this.props;
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
      />
    );
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
  mainDisplay = () => (
    <Fragment>
      {this.renderHeader()}
      {this.displayMode()}
    </Fragment>
  );
  render = () => {
    const style = {
      display: 'flex',
      alignItems: 'center',
      justifyContent: 'center',
      height: '100vh',
    };
    const styleAfterLoad = {
      height: '100vh',
    };
    console.log('Loader updated');
    const { userCheck } = this.state;
    return <div className="App">{userCheck && this.mainDisplay()}</div>;
  };
}

const mapStateToProps = state => {
  const { view: { loaded, mode, filterValue, filter }, user: { name: userName, lists, id: userID } } = state;
  return { loaded, mode, userName, lists, filter, filterValue, userID };
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
    addToUser: (pose, type = 'Favorites') =>
      dispatch({
        type: actionTypes.COLLECT_POSE,
        pose,
        type,
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
