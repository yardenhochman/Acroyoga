import React from 'react';
import { BrowserRouter as Router, Route, Switch } from 'react-router-dom';
import PageLayout from './Components/UI/Pages/PageLayout';
import NotFound from './Components/UI/Pages/NotFound';
import AboutUs from './Components/UI/Pages/About';
import PoseLoader from './PoseLoader';
import PoseGallery from './Components/PoseGallery';


export default function App() {
  return (
    <Router>
      <PageLayout>
        <Switch>
          <Route
            exact
            path="/"
            render={() => (
              <PoseLoader>
                <PoseGallery />
              </PoseLoader>
            )}
          />
          <Route path="/about" component={AboutUs} />
          <Route component={NotFound} />
        </Switch>
      </PageLayout>
    </Router>
  );
}
