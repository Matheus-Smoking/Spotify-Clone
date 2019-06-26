import React, { Component } from 'react';
import { 
  Card,
  Img,
  NameAlbum,
  NameArtist
} from "./style";

class PlaceholderSmall extends Component { 

  constructor(props){
    super(props);
  }

  render() {
    return (
      
        <Card>
          <Img />
          <NameAlbum></NameAlbum>
          <NameArtist></NameArtist>
        </Card>
    )
  }
}

export default PlaceholderSmall; 