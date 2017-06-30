import React from 'react';
import ReactDOM from 'react-dom';
import uuid from 'uuid';
import TodoList from './TodoList.js'
import InputLine from './InputLine.js'

const dummyData = [{ taskText: "do while..", completed: false }, { taskText: "sleep", completed: false }, { taskText: "eat", completed: false }];

class TodoApp extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      data : []
    };
    this.removeItem = this.removeItem.bind(this);
    this.addItem = this.addItem.bind(this);
  }

  removeItem(item) {
    this.setState({data : (this.state.data.filter((dataItem) => (dataItem.taskText !== item.taskText)))});
  }

  addItem(item) {
    this.setState({data : (this.state.data.concat([{taskText: item, completed: false}]))});
  }

  componentDidMount() {
    this.setState({data: dummyData});
  }

  render() {
    return (
      <div>
        <InputLine addItem = {this.addItem}/>
        <TodoList data={this.state.data} removeItem = {this.removeItem}/>
      </div>
    );
  }
}

export default TodoApp;
