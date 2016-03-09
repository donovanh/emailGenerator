import React, { Component } from 'react';

export default class Articles extends Component {
  render() {
    return (
      <div>
        <h2>This week</h2>
        <div class="media-item update">
          <div class="image">How to image?</div>
          <div class="content">
            <h2>Title Example</h2>
            <h5>Area (optional)</h5>
            <p>A description of the thing.</p>
          </div>
        </div>
      </div>
    );
  };

}
