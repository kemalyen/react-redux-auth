import React from 'react';
import ReactDOM from 'react-dom';
import { Provider } from 'react-redux';
import { createStore, applyMiddleware } from 'redux';
import { Router, browserHistory } from 'react-router';
import reduxThunk from 'redux-thunk';
import cookie from 'react-cookie';
import routes from './routes';
import reducers from './reducers/index';
import ReactGA from 'react-ga';
import { AUTH_USER } from './constants';
import App from './pages/App';
import { createLogger } from 'redux-logger'
import promise from 'redux-promise';

// Import stylesheets
import './public/stylesheets/base.scss';

// Initialize Google Analytics
ReactGA.initialize('UA-000000-01');

function logPageView() {
  ReactGA.pageview(window.location.pathname);
}

const logger = createLogger({
  level: 'info',
  collapsed: false,
  logger: console,
  predicate: (getState, action) => true
})

const createStoreWithMiddleware = applyMiddleware(promise, reduxThunk, logger)(createStore);
const store = createStoreWithMiddleware(reducers, 
  window.__REDUX_DEVTOOLS_EXTENSION__ && window.__REDUX_DEVTOOLS_EXTENSION__()  
);

const token = cookie.load('token');

if (token) {
  // Update application state. User has token and is probably authenticated
  store.dispatch({ type: AUTH_USER });
}

ReactDOM.render(
  <Provider store={store}>
    <Router history={browserHistory} routes={routes} onUpdate={logPageView} />
  </Provider>,
  document.querySelector('.wrapper'));
/* 
if (module.hot) {
  module.hot.accept('./pages/App.js', () => {
    const NextRootContainer = require('./pages/App.js').default;
    render(<NextRootContainer />, document.querySelector('.wrapper'));
  }
} */