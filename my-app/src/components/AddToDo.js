import React, { Component } from "react";

export class AddToDo extends Component {
  state = {
    content: "",
    priority: ""
  };

  handleChange = e => {
    this.setState({
      [e.target.id]: e.target.value
    });
  };

  handleSubmit = e => {
    e.preventDefault();
    this.props.addToDo(this.state);
    this.setState({
      content: "",
      priority: ""
    });
  };

  render() {
    return (
      <div>
        <form onSubmit={this.handleSubmit}>
          <label>Content</label>
          <input
            type="text"
            id="content"
            onChange={this.handleChange}
            value={this.state.content}
          />
          <label>Priority</label>
          <input
            type="text"
            id="priority"
            onChange={this.handleChange}
            value={this.state.priority}
          />
          <button>Submit</button>
        </form>
      </div>
    );
  }
}

export default AddToDo;
