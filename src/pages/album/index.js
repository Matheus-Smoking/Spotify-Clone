import React, { Component } from 'react';
import { Link } from 'react-router-dom';
import CardBig from '../../components/Cards/Big/';
import List from '../../components/List/';

import {
  Container,
  Tracks,
  Back
} from "./style";

class Album extends Component {

  constructor(props) {
    super(props);
    this.state = {
      album: []
    };
  }

  componentWillMount() {
    console.log(this.props.match)
  }
  // componentWillMount() {
  //   fetch('https://accounts.spotify.com/authorize?client_id=336e77bfaebc43029c5e086d6a5f1916&response_type=code',{
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
        <Back><Link to={`/albums/${this.props.match.params.album}`}>{`↩ Voltar`}</Link></Back>
        <Container>
          <CardBig />
          <Tracks>
            {
              [0, 1, 2, 3, 4, 5, 6, 7, 8, 9].map((index) => {
                return (
                  <List
                    key={index}
                    number={index}
                  />
                )
              })
            }

          </Tracks>
        </Container>
      </div>
    )
  }
}

export default Album; 