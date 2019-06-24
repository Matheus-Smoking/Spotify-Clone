import React, { Component } from 'react';
import { 
  Card,
  Img,
  NameAlbum,
  Artist
} from "./style";

class CardSmall extends Component { 

  render() {
    return (
        <Card>
            <Img src={this.props.img} />
            <NameAlbum>{this.props.name}</NameAlbum>
            <Artist>{this.props.artist}</Artist>
        </Card>
    )
  }
}

export default CardSmall; 