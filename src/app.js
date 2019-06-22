import React, { Component } from 'react';
import { BrowserRouter, Switch, Route } from 'react-router-dom';
import Search from './pages/search/';
import Home from './pages/home/';
import Album from './pages/album/';

import {
  GlobalStyle,
  Container,
  Hero,
  Input,
  Label,
} from "./GlobalStyles/styles";

class App extends Component {

  constructor(props) {
    super(props);
    this.state = {
      busca: "",
    };
  }
  

  search(e) {
    e.preventDefault();
    console.log(this.state.busca);
    window.location.href = `/albums/${this.state.busca}`;
  }

  render() {
    return (
        <Hero>
          <Container>
            <form onSubmit={(e) => this.search(e)} >
              <Label>Busque por artistas, álbuns ou músicas</Label>
              <Input
                type="text"
                name="busca"
                value={this.state.busca}
                placeholder="Digite aqui..."
                onChange={(e) => this.setState({ busca: e.target.value })}
                autoComplete="off"
              />
            </form>
            <BrowserRouter>
              <Switch>
                <Route path="/" exact={true} component={Home} />
                <Route path="/albums/:search" component={Search} />
                <Route path="/album/:album" component={Album} />
              </Switch>
            </ BrowserRouter>
          </Container>
        </Hero>
    );
  }
}

export default App;