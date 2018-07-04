import React from 'react';
import ReactDOM from 'react-dom';
import { createStore, combineReducers } from 'redux';
import { Provider } from 'react-redux';
import registerServiceWorker from './registerServiceWorker';
import 'semantic-ui-css/semantic.min.css';
import view from './store/reducers/view';
import pose from './store/reducers/pose';
import user from './store/reducers/user';
import Router from './Router';
import WebFont from 'webfontloader';

WebFont.load({
  google: {
    families: ['Special Elite:300,400,700','Roboto Condensed:300,400,700','Lato:300,400,700']
  }
});
const reducer = combineReducers({ view, pose, user });
const store = createStore(reducer, window.__REDUX_DEVTOOLS_EXTENSION__ && window.__REDUX_DEVTOOLS_EXTENSION__());

ReactDOM.render(
  <Provider store={store}>
    <Router />
  </Provider>,
  document.getElementById('root'),
);

if (module.hot) {
  module.hot.accept();
}

registerServiceWorker();
