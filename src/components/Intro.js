import React, { Component } from 'react';

export default class Intro extends Component {
  constructor() {
    super();
    this.state = {
      intro: "Intro text here - click it to edit.",
      inputClass: "hidden",
      pClass: "visible"
    }
  }

  editMode() {
    this.setState({ inputClass: "visible" });
    this.setState({ pClass: "hidden" });
  }

  exitEditMode() {
    this.setState({ inputClass: "hidden" });
    this.setState({ pClass: "visible" });
  }

  getInputClass() {
    return 'yo';
  }

  handleChange(e) {
    this.setState({intro: e.target.value});
  }

  render() {
    return (
      <div>
        <p
          className={this.state.pClass}
          onClick={this.editMode.bind(this)}
        >{this.state.intro}</p>
        <textarea
          className={this.state.inputClass}
          onChange={this.handleChange.bind(this)}
          value={this.state.intro}></textarea>
        <button onClick={this.exitEditMode.bind(this)}>Done</button>
      </div>
    );
  };

}
