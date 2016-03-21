import React, { Component } from 'react';

export default class Text extends Component {
  constructor(props) {
    super();
    this.state = {
      text: props.text,
      editing: false
    }
  }

  setEditMode() {
    this.setState({ editing: true });
  }

  save() {
    this.setState({ editing: false });
  }

  handleChange(e) {
    this.setState({text: e.target.value});
  }

  renderDisplay() {
    return (
      <span onClick={this.setEditMode.bind(this)}>{this.state.text}</span>
    );
  }

  renderForm() {
    return (
      <div>
        <textarea
          onChange={this.handleChange.bind(this)}
          value={this.state.text}></textarea>
        <button onClick={this.save.bind(this)}>Done</button>
      </div>
    );
  }

  render() {
    if (this.state.editing) {
      return this.renderForm();
    } else {
      return this.renderDisplay();
    }
  };

}
