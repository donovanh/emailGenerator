import React, { Component } from 'react';

export default class Text extends Component {
  constructor(props) {
    super();
    this.state = {
      intro: props.text,
      editing: false
    }
  }

  setEditMode() {
    this.setState({ editing: true });
  }

  exitEditMode() {
    this.setState({ editing: false });
  }

  handleChange(e) {
    this.setState({intro: e.target.value});
  }

  renderDisplay() {
    return (
      <span onClick={this.setEditMode.bind(this)}>{this.state.intro}</span>
    );
  }

  renderForm() {
    return (
      <div>
        <textarea
          onChange={this.handleChange.bind(this)}
          value={this.state.intro}></textarea>
        <button className={this.state.inputClass} onClick={this.exitEditMode.bind(this)}>Done</button>
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
