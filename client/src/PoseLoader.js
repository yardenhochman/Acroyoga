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
  state = { userCheck: false };
  componentDidMount = async () => {
    const { UserLogin } = this.props;
    try {
      const baseURL = '/users/token';
      const res = await axios({ method: 'get', baseURL, headers }); //fetch(myRequest)
      const { data: { user } } = res;
      if (!user) return this.setState({ userCheck: true });

      await UserLogin(user);
      this.setState({ userCheck: true });
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
      const pose = await axios({ method: 'post', baseURL, headers, data }); //fetch(myRequest);
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
      const pose = await axios({ method: 'delete', baseURL, headers, data }); //fetch(myRequest);
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
        <PoseDisplay userPoselists={this.props.lists.Favorites} markPose={this.markPose} unMarkPose={this.unMarkPose} />;
      </div>
    );
  };
  fetch = async (url, makeFetch) => {
    const { storePosesFromServer, setLoaded, mode } = this.props;
    try {
      if (makeFetch) {
        const pose = await axios.get(url, headers); //fetch(myRequest);
        storePosesFromServer(pose.data.data);
        mode === 'all' && storeLocally(pose.data.data);
        console.log('poses retreived from the server');
      } else storePosesFromServer(locallyStoredAllPoses);
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
  fetchPoses = () => {
    console.log('fetch');
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
    return this.fetch(url, makeFetch);
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
  const { view: { loaded, mode, filterValue, filter, tag }, user: { name: userName, lists, id: user_id } } = state;
  return { loaded, mode, userName, lists, filter, filterValue, user_id, tag };
};
const mapDispatchToProps = dispatch => {
  const {
    FILL_USER,
    LOG_OUT,
    SETMODE,
    LOADED,
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
    setTag: tag =>
      dispatch({
        type: SET_TAG,
        tag,
      }),
    setLoaded: () =>
      dispatch({
        type: LOADED,
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
