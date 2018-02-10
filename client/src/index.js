import React from 'react';
import ReactDOM from 'react-dom';
import { createStore, combineReducers } from 'redux';
import { Provider } from 'react-redux';


import registerServiceWorker from './registerServiceWorker';

import 'semantic-ui-css/semantic.min.css';

import view from './store/reducers/view';
import pose from './store/reducers/pose';
import user from './store/reducers/user';
import App from './router';

const reducer = combineReducers({ view, pose, user });
const store = createStore(reducer, window.__REDUX_DEVTOOLS_EXTENSION__ && window.__REDUX_DEVTOOLS_EXTENSION__());

ReactDOM.render(
  <Provider store={store}>
      <App />
  </Provider>,
  document.getElementById('root'),
);
registerServiceWorker();

