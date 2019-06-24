import React, { Component } from 'react';
import { 
  Card,
  Img,
  NameAlbum,
  NameArtist
} from "./style";

class CardSmall extends Component { 

  constructor(props){
    super(props);
  }

  render() {
    return (
      
        <Card>
          <Img src={this.props.img} />
          <NameAlbum>{this.props.titulo}</NameAlbum>
          <NameArtist>{this.props.artist}</NameArtist>
        </Card>
    )
  }
}

export default CardSmall; 