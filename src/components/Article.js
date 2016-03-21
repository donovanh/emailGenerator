import React, { Component } from 'react';

export default class Article extends Component {
  constructor(props) {
    super();
    this.state = {
      editMode: false,
      title: props.title,
      area: props.area,
      description: props.description,
      index: props.index
    }
  }

  edit() {
    this.setState({ editing: true });
  }

  save() {
    // Assemble the updated article object and pass to "onChange" property
    var newArticle = {
      title: this.state.title,
      area: this.state.area,
      description: this.state.description
    }
    this.props.onChange(newArticle, this.state.index);
    this.setState({ editing: false });
  }

  remove() {
    this.props.onRemove(this.state.index);
  }

  handleChange(e) {
    this.setState({intro: e.target.value});
  }

  renderDisplay() {
    return (
      <div>
        <div className="media-item update" onClick={this.edit.bind(this)}>
          <div class="image">How to image?</div>
          <div class="content">
            <h3>{this.props.title}</h3>
            <h5>{this.props.area}</h5>
            <p>{this.props.description}</p>
          </div>
        </div>
      </div>
    );
  }

  renderForm() {
    return (
      <div>
        EDIT MODE
        <button onClick={this.remove.bind(this)}>Remove</button>
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
