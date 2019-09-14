import React, { Component } from 'react';
import { connect } from 'react-redux';
import { deleteTask, doneTask } from '../actions/actions';
import Popup from 'reactjs-popup';
import '../popup.css';


class Tasklist extends Component {
  listOfDones = [];

  eraseTask(index) {
    this.props.deleteTask(index);
  }

  getItDone(element, index) {
    this.props.doneTask(index);
    this.listOfDones.push(element.newtask);
    this.props.deleteTask(index);
    this.showDones()
  }

  showDones() {
    const result = this.listOfDones.map((element, index) =>
      <div key={index}>
        <p key={index}>{element}</p>
      </div>
    );
    return result
  }

  getTodos(tasks) {
    const result = tasks.map((element, index) => (
      <div key={index}>
        <p key={index}>{element.newtask}</p>
        <button onClick={() => this.eraseTask(index)} type="button">Delete</button>
        <Popup trigger={<button type="button">Done</button>} modal>
          {close => (
            <div className="modal">
              <div className="content">
                Yay! Your task is done!
          <br />
              </div>
              <div className="actions">
                <button
                  className="button"
                  onClick={() => {
                    close();
                    this.getItDone(element, index)
                  }}>
                  Ok
          </button>
              </div>
            </div>
          )}
        </Popup>
      </div>
    ));
    return result;
  }

  render() {
    return (
      <div>
        <h1>Todos</h1>
        {this.getTodos(this.props.todos)}
        <h1>Dones</h1>
        {this.showDones()}
      </div>
    );
  }
}

const mapStateToProps = (state) => ({ todos: state });

const mapDispatchToProps = {
  deleteTask,
  doneTask,
};

export default connect(mapStateToProps, mapDispatchToProps)(Tasklist);
