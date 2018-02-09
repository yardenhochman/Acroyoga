import React, { Component } from 'react';
import { BrowserRouter as Router, Route } from 'react-router-dom';


import PageLayout from './Components/UI/pageLayout';
import NotFound from './Components/UI/notFound';
import AboutUs from './Components/UI/Credits/about';
import PoseLoader from './PoseLoader';

const App = () => {

  return (
    <Router>
      <React.Fragment>
        <Route path="/" component={PageLayout} />
        <Route exact path="/" component={PoseLoader} />
        <Route path="/about" component={AboutUs} />
      </React.Fragment>  
    </Router>
  );
}
export default App;