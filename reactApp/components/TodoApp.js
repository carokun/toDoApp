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
    this.toggleCompleted = this.toggleCompleted.bind(this);
  }

  removeItem(item) {
    this.setState({data : (this.state.data.filter((dataItem) => (dataItem.taskText !== item.taskText)))});
  }

  toggleCompleted(item) {
    console.log(this.state.data.map((dataItem) => ((dataItem.taskText === item.taskText)?{taskText: dataItem.taskText, completed: !dataItem.taskText}:dataItem)))
    this.setState({data : (this.state.data.map((dataItem) => (dataItem.taskText === item.taskText)?{taskText: dataItem.taskText, completed: !dataItem.completed}:dataItem))});
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
        <TodoList data={this.state.data} removeItem = {this.removeItem} toggleCompleted = {this.toggleCompleted}/>
      </div>
    );
  }
}

export default TodoApp;
