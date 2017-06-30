import React from 'react';
import ReactDOM from 'react-dom';
import uuid from 'uuid';

class InputLine extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      newInput: ""
    };

    this.handleSubmit = this.handleSubmit.bind(this);
    this.handleChange = this.handleChange.bind(this);
  }

  handleSubmit(event) {
    event.preventDefault();
    this.props.addItem(this.state.newInput);
    this.setState({newInput: ""});
  }

  handleChange(event) {
    this.setState({newInput: event.target.value})
  }

  render() {
    return (
      <div>
        <form onSubmit={this.handleSubmit}>
          <label style={{paddingRight: "10px"}}>Add a ToDo:  </label>
          <input type="text" value={this.state.newInput} onChange={this.handleChange}/>
          <input type="submit" value="Add"/>
        </form>
      </div>
    );
  }
}

export default InputLine;
