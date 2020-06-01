import React, { Component } from "react";

import "../css/EmailForm.css";

export default class EmailForm extends Component {
  constructor(props) {
    super(props);
    this.state = {
      name: "",
      email: "",
      message: "",
    };
  }

  onChangeName(event) {
    this.setState({
      name: event.target.value,
    });
  }
  onChangeEmail(event) {
    this.setState({
      email: event.target.value,
    });
  }
  onchangeMessage(event) {
    this.setState({
      message: event.target.value,
    });
  }
  handleSubmit(event) {
    event.preventDefault();
    this.onSubmit = () => ({
      name: this.state.name,
      email: this.state.email,
      message: this.state.message,
    });
    console.log(this.state);
  }
  render() {
    return (
      <div>
        <form onSubmit={this.handleSubmit.bind(this)}>
          <div className="name">
            <input
              type="text"
              value={this.state.name}
              onChange={this.onChangeName.bind(this)}
              placeholder="name"
            />
          </div>
          <div>
            <input
              type="email"
              value={this.state.email}
              onChange={this.onChangeEmail.bind(this)}
              placeholder="email"
            />
          </div>
          <div>
            <input
              type="text"
              value={this.state.message}
              onChange={this.onchangeMessage.bind(this)}
              placeholder="message"
            />
          </div>
          <div>
            <button type="submit">submit</button>
          </div>
        </form>
      </div>
    );
  }
}
