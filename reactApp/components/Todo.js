import React from 'react';
import ReactDOM from 'react-dom';
import uuid from 'uuid';

class Todo extends React.Component {
  constructor(props) {
    super(props);
    this.state = {

    };
  }

  render() {
    const item = this.props.item;
    const strike = this.props.item.completed;
    return (
      <li>
        <button onClick={() => this.props.removeItem(item)}>X</button>
        <button onClick={() => this.props.toggleCompleted(item)}>Toggle Completed </button>
        {this.props.item.completed ? <strike> {item.taskText} </strike> : item.taskText}
      </li>
    );
  }
}

export default Todo;
