import React from 'react';
import ReactDOM from 'react-dom';

import './css/index.css';
import App from './App';

import thunk from 'redux-thunk'
import {BrowserRouter as Router} from 'react-router-dom'

import { Provider } from 'react-redux';
import { createStore, applyMiddleware, compose } from 'redux';

import reducer from './reducers/combinedReducers'

const composeEnhancers = window.__REDUX_DEVTOOLS_EXTENSION_COMPOSE__ || compose;

const store = createStore(reducer, composeEnhancers(applyMiddleware(thunk)))

ReactDOM.render(
  <Provider store={store}>
    <Router>
      <App />
    </Router>
  </Provider>,
  document.getElementById('root')
);

