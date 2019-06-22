import React, { Component } from 'react';
import { 
  Card,
  Img,
  NameAlbum,
} from "./style";

class CardSmall extends Component { 

  render() {
    return (
        <Card>
          <Img />
          <NameAlbum>teste de nome de album</NameAlbum>
        </Card>
    )
  }
}

export default CardSmall; 