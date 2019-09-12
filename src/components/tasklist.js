/* eslint-disable react/sort-comp */
/* eslint-disable no-console */
/* eslint-disable semi */
/* eslint-disable class-methods-use-this */
/* eslint-disable react/prefer-stateless-function */
/* eslint-disable react/jsx-filename-extension */
/* eslint-disable react/destructuring-assignment */
/* eslint-disable react/prop-types */
/* eslint-disable react/no-array-index-key */
import React, { Component } from 'react';

import { connect } from 'react-redux';
import { deleteTask } from '../actions/actions';

class Tasklist extends Component {

  eraseTask(index) {
    this.props.deleteTask(index);
  }

  getTodos(todoss) {
    const result = todoss.map((element, index) => (
      <div key={index}>
        <p key={index}>{element.newtask}</p>
        <button onClick={() => this.eraseTask(index)} type="button">Delete</button>
      </div>
    ));
    return result;
  }

  render() {
    return (
      <div>
        <h1>Todos</h1>
        {this.getTodos(this.props.todos)}
      </div>
    );
  }
}

const mapStateToProps = (state) => ({ todos: state });

const mapDispatchToProps = {
  deleteTask,
};

export default connect(mapStateToProps, mapDispatchToProps)(Tasklist);
