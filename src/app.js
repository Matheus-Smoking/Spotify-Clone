import React, { Component } from 'react';
import { BrowserRouter, Switch, Route } from 'react-router-dom';
import Search from './pages/search/';
import Home from './pages/home/';
import Album from './pages/album/';
import {getToken, getAccess} from './service/HttpService'

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
      token: null,
    };
  }

  componentDidMount() {
    
    if(window.location.search == '') return;
    const access = window.location.search.replace('?code=','')
    
    getToken(access)   
    
  }

  login(){
    getAccess()
  }
  
  search(e) {
    e.preventDefault();
    console.log(this.state.busca);
    window.location.href = `/albums/${this.state.busca}`;
  }

  render() {
    return (
        <Hero>
          <p onClick={() => this.login()} >login</p>
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