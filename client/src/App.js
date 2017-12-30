import React, { Component } from 'react';
import './App.css';
import Mainframe from './Components/UI/Mainframe/mainframe';
/* import MainPage from './Containers/MainPage'; */
var Loader = require('react-loaders').Loader;

const loader = (
  <Loader
    key="ball-triangle-path"
    type="ball-triangle-path"
    active={true}
    color="red"
    size='Large'
  />
);

export default class App extends Component {
  state = {
    pose: {},
    loaded: false,
    mode: 'random'
  };
  setPose = pose =>
    this.setState({ pose, loaded: true });
  setMode = mode => this.setState({ mode });
  componentDidMount = () => {
    const myHeaders = new Headers();
    const myInit = {
      method: 'GET',
      headers: myHeaders,
      mode: 'cors',
      cache: 'default'
    };
    fetch(`/index/random`, myInit)
      .then(pose => pose.json())
      .then(pose =>
        removeSpacesInObjectKeys(pose.data)
      )
      .then(pose => this.setPose(pose));
  };
  render = () => {
    return (
      <div className="App loader-container">
        {this.state.loaded ? (
          <Mainframe pose={this.state.pose} />
        ) : (
            loader
          )}
      </div>
    );
  };
}
//http://localhost:3001/index/random

const removeSpacesInObjectKeys = json => {
  const keyValues = Object.keys(json).map(key => {
    const newKey = key.replace(/\s+/g, '_');
    return { [newKey]: json[key] };
  });
  return Object.assign({}, ...keyValues);
};
/* 

options:
-load random pose
-load from category (DB)

 */