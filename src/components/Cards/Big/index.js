import React, { Component } from 'react';
import {
  Card,
  Cardimg,
  Img,
  NameAlbum,
  Artist
} from "./style";

class CardSmall extends Component {

  render() {
    return (
      <Card>
        <Cardimg>
          <Img src={this.props.img} />
        </Cardimg>
        <NameAlbum>{this.props.name}</NameAlbum>
        <Artist>{this.props.artist}</Artist>
      </Card>
    )
  }
}

export default CardSmall; 