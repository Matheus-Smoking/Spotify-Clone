import React, { Component } from 'react';
import { Link } from 'react-router-dom';
import {getTracks} from '../../service/TracksService'
import CardBig from '../../components/Cards/Big/';
import List from '../../components/List/';
import Placeholder from '../../components/Placeholder/ListPlaceholder'

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
    };
  }

  componentDidMount() {
    getTracks(this.props.location.state.id)
    .then(res => this.setState({ album: res }))
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
              !this.state.album ?
              [0,1,2,3,4,5,6,7,8,9].map(() => {
                return(
                  <Placeholder></Placeholder>
                )
              }) 
               : 
               this.state.album.items.map((item, index) => {
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