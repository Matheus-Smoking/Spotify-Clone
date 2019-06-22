import React, { Component } from 'react';
import { 
  TracksItem,
  TracksName,
  Number,
  Time,
} from "./style";

class List extends Component { 
  constructor(props) {
    super(props);
  }

  render() {
    return (
        <TracksItem>
          <TracksName><Number>{`${this.props.number + 1 }.`}</Number>Name Musica</TracksName>
          <Time>3:32</Time>
        </TracksItem>
    )
  }
}

export default List; 