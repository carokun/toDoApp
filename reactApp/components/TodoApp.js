import React from 'react';
import ReactDOM from 'react-dom';
import uuid from 'uuid';
import TodoList from './TodoList.js'
import InputLine from './InputLine.js'
import axios from 'axios'

const dbUrl = "https://majestic-saguaro-39370.herokuapp.com/db";

// const dummyData = [{ taskText: "do while..", completed: false }, { taskText: "sleep", completed: false }, { taskText: "eat", completed: false }];

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

  toggleCompleted(item) {
    const self = this;
    axios.post(dbUrl + "/toggle", {item})
    .then(function (response) {
      self.setState({data : (self.state.data.map((dataItem) => (dataItem.taskText === item.taskText)?{taskText: dataItem.taskText, completed: !dataItem.completed}:dataItem))});
    })
    .catch(function (error) {
      console.log(error);
    });
  }

  removeItem(item) {
    const self = this;
    axios.post(dbUrl + "/delete", {item})
    .then(function (response) {
      self.setState({ data: (self.state.data.filter((dataItem) => (dataItem.taskText !== item.taskText)))});
    })
    .catch(function (error) {
      console.log(error);
    });
  }

  addItem(item) {
    const self = this;
    // this.setState({data : (this.state.data.concat([{taskText: item, completed: false}]))});
    if (item === "") {
      return;
    }
    axios.post(dbUrl + "/add", {item})
    .then(function (response) {
      self.setState({ data: self.state.data.concat(response.data)});
    })
    .catch(function (error) {
      console.log(error);
    });
  }

  componentDidMount() {
    const self = this;
    // this.setState({data: dummyData});
    axios.get(dbUrl + "/all")
    .then((response) => {
      self.setState({ data: self.state.data.concat(response.data)});
    })
    .catch(function (error) {
      console.log(error);
    });
  }


  render() {
    return (
      <div id="outer">
        <TodoList data={this.state.data} removeItem = {this.removeItem} toggleCompleted = {this.toggleCompleted}/>
        <InputLine addItem = {this.addItem}/>
      </div>
    );
  }
}

export default TodoApp;
