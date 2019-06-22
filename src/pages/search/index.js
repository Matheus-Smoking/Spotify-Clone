import React, { Component } from 'react';
import CardSmall from '../../components/Cards/Small'
import { 
  Container,
  TitleResult,
} from "./style";

class Search extends Component { 

  constructor(props){
    super(props);
    this.state = {
      album:[]
     };
  }
  // componentWillMount() {
  //   fetch('https://api.spotify.com/v1/search?q=charlie',{
  //     headers:{
  //       'Authorization': 'Bearer ' + 'BQAzff3WTdzxViS69-ol7AUhPtN6W1J_mTw2K83YN6pJviGiGX_v5vfFcpFGc_PdfDzUNIAS7sBurVAJ2uU7XzsJZA3oXiCi6SHlL5gqoThO_iieCvGsNkhALblS5-8UZjqr8Qvx7LnvxDoGs3SwQQMTXSzsuIXa8xBpvxIrMVPlkyAggfDSUC59kdzCS9k3fbx8F_vceHBYXmByjEQ5ywq87ROpcia_OnZCFyhqoSUNg36-d2ZS6tasr5xsgDx6jgiAENGPjRJZtMeWESve'
  //     }
  //   })
  //   .then(res => res.json())
  //   .then(res => this.setState({ album: res }))
  //   console.log(this.state.album)
  // }


  render() {
    return (
        <div>
          <TitleResult>Resultados encontrados para"{this.props.match.params.search}"</TitleResult>
          <Container>
          {
          [0,0,0,0,0,0,0,0,0,0,0,0,0].map((index) => {
            return (
            <CardSmall key={index} />
            )
          })
        }
        </Container>
      </div>
    )
  }
}

export default Search; 