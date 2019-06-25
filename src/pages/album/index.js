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
      album: null,
      play:'none'
    };
  }

  componentDidMount() {
    console.log(this.state.token);

    const accessToken = localStorage.getItem("token");

    const seacrh = `
    https://api.spotify.com/v1/albums/${this.props.location.state.id}/tracks?limit=50`;

    fetch(seacrh,
    {
      headers: {
        'Authorization': 'Bearer ' + accessToken,
        "Accept": "application/json",
        "Content-Type": "application/json"
      }
    })
    .then(res => res.json())
    .then(res => this.setState({ album: res }))
    .then(res => console.log(this.state.album))

  }

  render() {
    return (
      <div>
        <Back><Link to={`/albums/${this.props.location.state.url}`}>{`↩ Voltar`}</Link></Back>
        <Container>
          <CardBig
            img={this.props.location.state.link}
            name={this.props.location.state.album}
            artist={this.props.location.state.artist}
          />
          <Tracks >
            {
              !this.state.album ? 'Loading...' : this.state.album.items.map((item, index) => {
                return (
                  
                  <List
                    key={index}
                    audio={item.preview_url}
                    number={item.track_number}
                    name={item.name}
                    duration={item.duration_ms}
                    
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