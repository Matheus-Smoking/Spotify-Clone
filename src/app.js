import React, { Component } from 'react';
import { BrowserRouter, Switch, Route } from 'react-router-dom';
import Search from './pages/search/';
import Home from './pages/home/';

class App extends Component {

  constructor() {
    super();
  }
  render() {
    return (
      <main>
        <h1>Helo word</h1>
        <BrowserRouter>
            <Switch>
                <Route path="/" exact={true} component={Home} />
                <Route path="/busca" component={Search} />
            </Switch>
        </ BrowserRouter>
      </main>
    );
  }
}

export default App;