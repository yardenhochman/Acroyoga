import React, { Fragment } from 'react';
import { BrowserRouter as Router, Route, Switch } from 'react-router-dom';
import PageLayout from './Components/UI/PageLayout';
import NotFound from './Components/UI/NotFound';
import AboutUs from './Components/UI/About';
import PoseLoader from './PoseLoader';

const App = () => (
  <Router>
    <Fragment>
      <Route path="/" component={PageLayout} />
      <Switch>
        <Route exact path="/" component={PoseLoader} />
        <Route path="/about" component={AboutUs} />
        <Route component={NotFound} />
      </Switch>
    </Fragment>
  </Router>
);
export default App;
