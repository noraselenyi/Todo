/* eslint-disable react/button-has-type */
/* eslint-disable react/no-string-refs */
/* eslint-disable react/prop-types */
/* eslint-disable react/destructuring-assignment */
/* eslint-disable react/jsx-filename-extension */
import React, { Component } from 'react';

import { addTask } from '../actions/actions';
import { connect } from 'react-redux';

class Todos extends Component {
  state = {
    newtask: '',
    done: false,
  }

  getFromInput = (e) => {
    this.setState({
      newtask: e.target.value,
    });
  };

  setNewTask(e) {
    e.preventDefault();
    addTask(this.state);
  }

  render() {
    return (
      <div>
        <input type="text" placeholder="type here" ref="task" onChange={this.getFromInput} />
        <button onClick={() => this.props.addTask(this.state)}>Add</button>
      </div>
    );
  }
}

const mapDispatchToProps = {
  addTask,
};

export default connect(null, mapDispatchToProps)(Todos);
