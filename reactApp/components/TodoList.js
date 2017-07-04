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
      <div id="todoList">
        {this.props.data.map((item) =>
          <Todo key={item._id} removeItem = {this.props.removeItem} toggleCompleted = {this.props.toggleCompleted} item={item}/>
        )}
      </div>
    );
  }
}

export default TodoList;
