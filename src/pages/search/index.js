import React, { Component } from 'react';
import { Link } from 'react-router-dom';
import CardSmall from '../../components/Cards/Small'
import { 
  Container,
  TitleResult,
} from "./style";

class Search extends Component { 

  constructor(props){
    super(props);
    this.state = {
      album:null,
     };
  }

  componentDidMount() {
    fetch(`http://localhost:3000/src/service/exemplo.json`)
    .then(res => res.json())
    .then(res => this.setState({ album: res.albums.items }))
    .then(res => console.log(this.state.album))
  }

  render() {
    return (
        <div>
          <TitleResult>Resultados encontrados para "{this.props.match.params.search}"</TitleResult>
          <Container>
          {
          !this.state.album ? 'Loading...' : this.state.album.map((item,index) => {
            return (
            <Link 
              to={{
                pathname:`/album/${index}`,
                state: {
                  url: this.props.match.params.search,
                  link: item.images[0].url,
                  album:item.name,
                  artist:item.artists[0].name
                }
              }}
            >
              <CardSmall
               key={index}
               titulo={item.name}
               artist={item.artists[0].name}
               img={item.images[1].url}
              />
            </Link>
            )
          })
        }
        </Container>
      </div>
    )
  }
}

export default Search; 