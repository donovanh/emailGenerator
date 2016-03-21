import React, { Component } from 'react';
import Text from "./Text"
import Articles from "./Articles"

export default class Layout extends Component {
  render() {
    return (
      <div>
        <h2><Text text="Title - click to edit" /></h2>
        <p><Text text="Intro text - click to edit" /></p>
        <Articles />
        <p><Text text="Next week - click to edit" /></p>
      </div>
    );
  };

}
