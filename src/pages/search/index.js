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

  componentWillMount() {
    fetch(`http://localhost:3000/src/service/exemplo.json`)
    .then(res => res.json())
    .then(res => this.setState({ album: res.albums.items }))
    .then(res => console.log(res.albums.items));
  }

  render() {
    return (
        <div>
          <TitleResult>Resultados encontrados para "{this.props.match.params.search}"</TitleResult>
          <Container>
          {
          [0,1].map((index) => {
            return (
            <Link to={`/album/${index}`} >
              <CardSmall key={index} />
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