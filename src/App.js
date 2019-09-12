/* eslint-disable import/no-named-as-default-member */
/* eslint-disable import/no-named-as-default */
/* eslint-disable react/prefer-stateless-function */
/* eslint-disable react/jsx-filename-extension */
import React, { Component } from 'react';

import Navbar from './components/navbar';
import Tasklist from './components/tasklist';
import Todos from './components/addtask';

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
