/* eslint-disable react/jsx-filename-extension */
/* eslint-disable react/prefer-stateless-function */

import React, { Component } from 'react';

class Navbar extends Component {
  render() {
    return (
      <div className="navbar">
        <div className="reactlogo" />
        <h1 className="todoapp">Todo Application</h1>
        <div className="reduxlogo" />
      </div>
    );
  }
}

export default Navbar;
