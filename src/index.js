import App from './App';
// import * as serviceWorker from './serviceWorker';
import { Provider } from 'react-redux';
/* eslint-disable react/jsx-filename-extension */
import React from 'react';
import ReactDOM from 'react-dom';
import { createStore } from 'redux';
import reducer from './reducers/reducer';

const store = createStore(reducer);

ReactDOM.render((
  <Provider store={store}>
    <App />
  </Provider>
), document.getElementById('root'));

// serviceWorker.unregister();
