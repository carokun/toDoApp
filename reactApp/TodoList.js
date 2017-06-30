import React from 'react';
import ReactDOM from 'react-dom';
import uuid from 'uuid';
import Todo from './Todo.js'

class TodoList extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      dummyData : ["cry", "eat", "walk the dog", "send dom back to canada", "sleep", "rave", "repeat"]
    };
    this.removeItem = this.removeItem.bind(this);
  }

  removeItem(item) {
    this.setState({dummyData : (this.state.dummyData.filter((dataItem) => (dataItem !== item)))});
  }

  render() {
    return (
      <ul>
        {this.state.dummyData.map((item) =>
          <Todo key={uuid()} removeItem = {this.removeItem} item={item}/>
        )}
      </ul>
    );
  }
}

export default TodoList;
