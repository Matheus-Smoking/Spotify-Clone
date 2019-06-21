import React, { Component } from 'react';
import { Link } from 'react-router-dom';
import CardSmall from '../../components/Cards/Small'
class Home extends Component { 

  render() {
    return (
      <div>
        <CardSmall />
        <Link to='/busca'>ir para busca</Link>
      </div>
    )
  }
}

export default Home; 