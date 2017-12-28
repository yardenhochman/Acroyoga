import React, { Component } from 'react';
import './App.css';
import MainPage from './Containers/MainPage';

export default class App extends Component {

  render = () => {
    return (
      <div className="App">
      <MainPage />
      </div>
    );
  }
}
