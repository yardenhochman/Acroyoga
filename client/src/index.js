import React from 'react';
import ReactDOM from 'react-dom';
import 'semantic-ui-css/semantic.min.css';
import './index.css';
import PoseLoader from './PoseLoader';
import registerServiceWorker from './registerServiceWorker';

import { createStore, combineReducers } from 'redux';
import { Provider } from 'react-redux';

import view from './store/reducers/view';
import pose from './store/reducers/pose';
import user from './store/reducers/user';

const reducer = combineReducers({ view, pose, user });
const store = createStore(reducer, window.__REDUX_DEVTOOLS_EXTENSION__ && window.__REDUX_DEVTOOLS_EXTENSION__());

ReactDOM.render(
  <Provider store={store}>
    <PoseLoader />
  </Provider>,
  document.getElementById('root'),
);
registerServiceWorker();
