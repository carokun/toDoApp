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
    return (
      <li>
        <button onClick={() => this.props.removeItem(this.props.item)}>X</button>
        {this.props.item}
      </li>
    );
  }
}

export default Todo;
