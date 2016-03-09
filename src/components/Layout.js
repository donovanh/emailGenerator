import React, { Component } from 'react';
import Title from "./Title"
import Intro from "./Intro"
import Articles from "./Articles"
import NextWeek from "./NextWeek"

export default class Layout extends Component {
  render() {
    return (
      <div>
        <Title />
        <Intro />
        <Articles />
        <NextWeek />
      </div>
    );
  };

}
