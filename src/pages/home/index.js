import React, { Component } from 'react';
import { connect } from 'react-redux';
import { getAccess } from '../../service/HttpService';
import { getSearch } from '../../service/SearchService';
import { Link } from 'react-router-dom';
import {
  Container,
  TitleResult,
  NoSeach
} from "./style";
import CardSmall from '../../components/Cards/Small';
import Placeholder from '../../components/Placeholder/SmallPlaceholder';


class Home extends Component {

  constructor(props) {
    super(props);
    this.state = {
      album: null,
      res: true
    };
  }

  componentDidMount() {
    const searchStore = this.props.conter;
    if (searchStore === '0') {
      this.setState({ res: false })
    } else {
      getSearch(this.props.conter)
        .then(res => {
          if (res.hasOwnProperty("error")) {
            getAccess()
          } else if (res.albums.items.length == 0) {
            this.setState({ album: res.albums.items })
            this.setState({ res: false })
          } else {
            this.setState({ album: res.albums.items })
          }
        }
        )
    }
  }

  render() {
    return (
      <div>
        <TitleResult>Buscado Recentemente:</TitleResult>
        {
          !this.state.res ?
            <NoSeach>Você não fez buscas recentemente</NoSeach>
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
                            url: this.props.conter,
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

const mapStateToProps = (state) => {
  return {
    conter: state
  }
}

export default connect(mapStateToProps)(Home); 