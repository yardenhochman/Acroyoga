import React, { Component } from 'react';
import './App.css';
/* import MainPage from './Containers/MainPage'; */

export default class App extends Component {
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
      .then(pose => renameKeys(pose.data))
      .then(pose => console.log(pose));
  };
  render = () => {
    return (
      <div className="App">
        {/* <MainPage /> */}
      </div>
    );
  };
}
//http://localhost:3001/index/random

const renameKeys = json => {
  const keyValues = Object.keys(json).map(key => {
    const newKey = key.replace(/\s+/g, '_');
    return { [newKey]: json[key] };
  });
  return Object.assign({}, ...keyValues);
};
