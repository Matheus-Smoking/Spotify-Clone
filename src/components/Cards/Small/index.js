import React, { Component } from 'react';
import { 
  Card,
  Img,
  NameAlbum,
  NameArtist
} from "./style";

class CardSmall extends Component { 

  render() {
    return (
      
        <Card>
          <Img />
          <NameAlbum>teste de nome de album</NameAlbum>
          <NameArtist>teste de nome do artista</NameArtist>
        </Card>
    )
  }
}

export default CardSmall; 