import React, { Component } from 'react';
import './App.css';
import Mainframe from './Components/UI/Mainframe/mainframe';
/* import MainPage from './Containers/MainPage'; */
import { loader, removeSpacesInObjectKeys } from './helpers/helpers' 


export default class App extends Component {
  state = {
    pose: {},
    loaded: false,
    mode: 'random'
  };
  setPose = pose => this.setState({ pose, loaded: true });
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
      .then(pose => removeSpacesInObjectKeys(pose.data))
      .then(pose => this.setPose(pose));
  };
  render = () => {
    return (
      <div className="App loader-container">
        {this.state.loaded ? <Mainframe pose={this.state.pose} />
          : (loader)}
      </div>
    );
  };
}
//http://localhost:3001/index/random


/* 

options:
-load random pose
-load from category (DB)

 */