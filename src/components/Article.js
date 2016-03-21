import React, { Component } from 'react';

export default class Article extends Component {
  constructor(props) {
    super();
    this.state = {

    }
  }
  render() {
    return (
      <div>
        <div class="media-item update">
          <div class="image">How to image?</div>
          <div class="content">
            <h3>{this.props.title}</h3>
            <h5>{this.props.area}</h5>
            <p>{this.props.description}</p>
          </div>
        </div>
      </div>
    );
  };

}
