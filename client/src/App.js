import React, { Component } from 'react';
import './App.css';
import Mainframe from './Components/UI/Mainframe/mainframe';
/* import MainPage from './Containers/MainPage'; */

export default class App extends Component {
  state = {
    pose: {},
    loaded: false
  };
  setPose = pose => this.setState({ pose: pose, loaded:true });

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
      .then(pose => removeSpacesInObjectKeys(pose.data))
      .then(pose => this.setPose(pose));
  };
  render = () => {
    return (
      <div className="App">
        {this.state.loaded ? (
          <Mainframe pose={this.state.pose} />
        ) : (
          ''
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
