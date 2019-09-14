/* eslint-disable react/jsx-filename-extension */
/* eslint-disable react/prefer-stateless-function */
/* eslint-disable import/no-named-as-default-member */
/* eslint-disable import/no-named-as-default */

import React, { Component } from 'react';
import Navbar from './components/navbar';
import Tasklist from './components/tasklist';
import Todos from './components/addtask';
import './css/App.css';

class App extends Component {
  render() {
    return (
      <div>
        <Navbar />
        <Todos />
        <Tasklist />
      </div>
    );
  }
}


export default App;
