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
      <div className="todoElement">
        {this.props.item.completed ? <strike> {item.taskText} </strike> : item.taskText}
        <button className="removeItem" onClick={() => this.props.removeItem(item)}>Delete</button>
        <button className="toggle" onClick={() => this.props.toggleCompleted(item)}>Toggle Completed</button>
      </div>
    );
  }
}

export default Todo;
