import React, { Component } from 'react';
import { connect } from 'react-redux';
import { deleteTask, doneTask } from '../actions/actions';
import Popup from 'reactjs-popup';
import '../css/popup.css';
import '../css/App.css'


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
      <div className="donetask" key={index}>
        <p key={index}>{element}</p>
      </div>
    );
    return result
  }

  getTodos(tasks) {
    const result = tasks.map((element, index) => (
      <div className="todos" key={index}>

        <p key={index}>{element.newtask}</p>
        <div className="buttonsForTasks">

          <div className="donebutton">
            <button onClick={() => this.getItDone(element, index)} type="button" className="check">
              <i className="fas fa-check"></i>
            </button>
            <div className="box" onClick={() => this.getItDone(element, index)}>
              done
            </div>
          </div>

          <Popup trigger={
            <div className="delete">
              <button className="trash">
                <i className="far fa-trash-alt"></i>
              </button>
              <div className="box">
                delete
              </div>
            </div>
          } modal>
            {close => (
              <div className="modal">
                <div>
                  <p className="popupText">
                  Task is deleted!
                  <span role="img" aria-label="tick">   ✔️</span>
                  </p>
                </div>
                <div>
                  <button
                    className="okbutton"
                    onClick={() => {
                      close();
                      this.eraseTask(index);
                    }}>
                    Ok
                  </button>
                </div>
              </div>
            )}
          </Popup>
        </div>
      </div>

    ));
    return result;
  }

  getDones() {
    if (this.listOfDones.length !== 0) {
      return (
        <h1>Dones</h1>
      )
    }
  }

  render() {
    return (
      <div>
        <div className="listtasks">
          <h1>Tasks</h1>
          {this.getTodos(this.props.todos)}
          {this.getDones()}
          {this.showDones()}
        </div>
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
