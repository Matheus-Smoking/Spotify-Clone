import React, { Component } from 'react';
import { BrowserRouter, Switch, Route } from 'react-router-dom';
import { getToken } from './service/HttpService';
import Login from './components/Login'
import Search from './pages/search/';
import Home from './pages/home/';
import Album from './pages/album/';
import {
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
      token: false
    };
  }

  componentWillMount() {
    let access = window.location.search
    if (access.indexOf("code") != -1) {
      getToken(access)
    }
  }

  search(e) {
    e.preventDefault();
    console.log(this.state.busca);
    window.location.href = `/albums/${this.state.busca}`;
  }

  render() {
    return (
      <Hero>
        {
          !localStorage.getItem("token") == false ?
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
            :
            <Login />
        }

      </Hero>
    );
  }
}

export default App;