import React, { Component } from 'react';
import {
  TracksItem,
  TracksName,
  Time,
} from "./style";

class PlaceholderList extends Component {
  constructor(props) {
    super(props);

  }

  render() {
    return (
      <TracksItem>
        <TracksName></TracksName>
        <Time></Time>
      </TracksItem>
    )
  }
}

export default PlaceholderList; 