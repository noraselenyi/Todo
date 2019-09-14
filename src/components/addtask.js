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

  setNewTask() {
    if (this.state.newtask !== '') {
      this.props.addTask(this.state);
    }
  }

  render() {
    return (
      <div className="addTask">
        <input type="text" placeholder="type new task here" ref="task" onChange={this.getFromInput} />
        <button className="addButton" onClick={() => this.setNewTask()}>
          Add
        </button>
      </div>
    );
  }
}

const mapDispatchToProps = {
  addTask,
};

export default connect(null, mapDispatchToProps)(Todos);
