import React from 'react';
import ReactDOM from 'react-dom';
import uuid from 'uuid';
import Todo from './Todo.js'

class TodoList extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
    };
  }


  render() {
    return (
      <ul>
        {this.props.data.map((item) =>
          <Todo key={uuid()} removeItem = {this.props.removeItem} item={item}/>
        )}
      </ul>
    );
  }
}

export default TodoList;
