import React, { Component } from 'react';
import { getSearch } from '../../service/SearchService'
import { Link } from 'react-router-dom';
import CardSmall from '../../components/Cards/Small'
import Placeholder from '../../components/Placeholder/SmallPlaceholder'


import {
  Container,
  TitleResult,
  NoSeach
} from "./style";

class Search extends Component {

  constructor(props) {
    super(props);
    this.state = {
      album: null,
      res:true
    };
  }

  componentDidMount() {
    getSearch(this.props.match.params.search)
      .then(res => {
        if (res.albums.items.length == 0) {
          this.setState({ album: res.albums.items })
          this.setState({ res: false })
        } else {
          this.setState({ album: res.albums.items })
        }
      }
      )
  }

  render() {
    return (
      <div>
        <TitleResult>Resultados encontrados para "{this.props.match.params.search}"</TitleResult>
        {
          !this.state.res ?
           <NoSeach>Não foi encontrado oque você esta buscando, por favor verifique sua busca</NoSeach>
          :  
        <Container>
          {
            !this.state.album ?
              [0, 1, 2, 3, 4, 5, 6, 7, 8, 9].map(() => {
                return (
                  <Placeholder></Placeholder>
                )
              })
              :
              this.state.album.map((item, index) => {
                return (
                  <Link
                    to={{
                      pathname: `/album/${index}`,
                      state: {
                        url: this.props.match.params.search,
                        link: item.images[0].url,
                        album: item.name,
                        artist: item.artists[0].name,
                        id: item.id
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
                }
      </div>
    )
  }
}

export default Search; 